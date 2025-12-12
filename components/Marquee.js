'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Marquee.module.css';

gsap.registerPlugin(useGSAP);

export default function Marquee({ children, speed = 15, gap = 40 }) {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const width = track.scrollWidth / 4; // because we duplicate content 4 times
    gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -width,
        duration: speed,
        ease: 'none',
        repeat: -1,
      },
    );
  });

  return (
    <div className={`${styles.marquee} marquee`}>
      <div
        className={`${styles.track} track`}
        ref={trackRef}
        style={{ gap: `${gap}px` }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
