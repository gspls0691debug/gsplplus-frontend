import concurrent.futures, json, os, pathlib, re, struct, zipfile, zlib
import xml.etree.ElementTree as ET
import olefile

OUT = pathlib.Path(__file__).parent
ROOTS = [r'Z:\2 개발 프로젝트', r'Z:\3 project_mobi', r'Z:\4 GSPLPLUS']

def hwp_text(path):
    with olefile.OleFileIO(path) as f:
        compressed = struct.unpack_from('<I', f.openstream('FileHeader').read(), 36)[0] & 1
        paragraphs = []
        for stream in f.listdir():
            if stream[0] != 'BodyText':
                continue
            b = f.openstream(stream).read()
            if compressed:
                b = zlib.decompress(b, -15)
            pos = 0
            while pos + 4 <= len(b):
                header = struct.unpack_from('<I', b, pos)[0]
                pos += 4
                tag, size = header & 1023, header >> 20
                if size == 4095:
                    size = struct.unpack_from('<I', b, pos)[0]
                    pos += 4
                if tag == 67:
                    paragraphs.append(b[pos:pos+size].decode('utf-16le', errors='replace'))
                pos += size
        return '\n'.join(paragraphs)

def listdir(path):
    try:
        return list(os.scandir(path))
    except OSError:
        return []

def scan(project):
    files, errors = [], []
    queue = [(project, 0)]
    excluded = re.compile(r'^(#recycle|\.DAV|\.git|node_modules|History|__History|Libraries|Debug|Release|Objects|Listings|venv|\.venv)$', re.I)
    while queue:
        path, depth = queue.pop()
        try:
            entries = list(os.scandir(path))
        except OSError as e:
            errors.append(str(e)); continue
        for e in entries:
            if e.is_dir(follow_symlinks=False):
                if depth < 2 and not excluded.match(e.name):
                    queue.append((e.path, depth+1))
            else:
                ext = pathlib.Path(e.name).suffix.lower()
                if ext in {'.pdf','.hwp','.hwpx','.docx','.xlsx','.xls','.pptx','.txt','.md'} and not e.name.startswith('~$'):
                    files.append(e.path)
    return {'project': project, 'files': files, 'errors': errors, 'scan_depth': 2}

if __name__ == '__main__':
    projects=[]
    for root in [ROOTS[0],ROOTS[2]]:
        for e in listdir(root):
            if e.is_dir() and re.match(r'^\d{1,3}(?:[ .]|[가-힣])', e.name) and int(re.match(r'\d+',e.name)[0]) < 300:
                if root == ROOTS[0] and e.name in ['1 문서','8 현장훈련 학습일지','30 신재생에너지_발전설비기사']:
                    continue
                if root == ROOTS[2] and int(re.match(r'\d+',e.name)[0]) < 11:
                    continue
                projects.append(e.path)
    for base in [ROOTS[1]+r'\1PROJECT',ROOTS[1]+r'\3 PROJECT_3']:
        for e in listdir(base):
            if e.is_dir() and not re.match(r'^(999|Synology|새 폴더)',e.name):
                if e.name in ['1 모비다임','2 가스펠프러스','3 가스펠그룹']:
                    projects.extend(x.path for x in listdir(e.path) if x.is_dir() and not re.match(r'^(999|#|\.DAV)', x.name))
                else:
                    projects.append(e.path)
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results=list(pool.map(scan, projects))
    (OUT/'inventory.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'Projects: {len(results)}; document paths: {sum(len(x["files"]) for x in results)}',flush=True)
