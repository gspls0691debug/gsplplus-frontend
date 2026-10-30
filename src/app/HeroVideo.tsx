"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <video ref={videoRef} className={styles.heroVideo} autoPlay loop muted playsInline>
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
