"use client";

import { useState } from "react";
import styles from "./page.module.css";

const email = "polaris65b@gspls.kr";

export default function CopyEmail() {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("이메일 주소를 복사했습니다.");
    } catch {
      setMessage("복사하지 못했습니다. 위 이메일 주소를 선택해 직접 복사해 주세요.");
    }
  }

  return (
    <>
      <p className={styles.infoLink}>{email}</p>
      <button type="button" className={styles.copyButton} onClick={copyEmail}>
        이메일 주소 복사
      </button>
      <p className={styles.copyStatus} role="status">{message}</p>
    </>
  );
}
