'use client';

import styles from './Projects.module.css';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.from('.chartContainer .row div div', {
        height: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out()',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    {
      revertOnUpdate: true,
      dependencies: [isMobile],
      scope: container,
    },
  );

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.fromTo(
        '.chartContainer .row h1, .chartContainer .row p ',
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power2.out()',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
            // markers:true
          },
        },
      );
    },
    {
      revertOnUpdate: true,
      dependencies: [isMobile],
      scope: container,
    },
  );

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.from('.chartContainer .centerSection', {
        width: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    {
      revertOnUpdate: true,
      dependencies: [isMobile],
      scope: container,
    },
  );

  return (
    <section className={styles.projectContainer} ref={container}>
      <h1>Projects</h1>
      <div className={`${styles.chartContainer} chartContainer`}>
        <div
          className={`${`${styles.firstSection} firstSection`} ${
            styles.row
          } row`}
        >
          <div>
            <h1>ULTRON</h1>
            <p>(Deployed with GKM Energy)</p>
            <div></div>
          </div>
          <div>
            <h1>Weighbridge AI</h1>
            <p>(DMG, Rajasthan)</p>
            <div></div>
          </div>
          <div>
            <h1>DamChat</h1>
            <p>(ICED, IIT Roorkee)</p>
            <div></div>
          </div>
          <div>
            <h1>BULK ATTENDANCE SYSTEM</h1>
            <p>(GD Goenka University)</p>
            <div></div>
          </div>
        </div>
        <div className={`${styles.centerSection} centerSection`}>
          <hr />
        </div>
        <div
          className={`${styles.secondSection} ${styles.row} secondSection row`}
        >
          <div>
            <h1>AI DRIVE THROUGH</h1>
            <p>Synchronous Build Digital</p>
            <div></div>
          </div>
          <div>
            <h1>EEDW</h1>
            <p>(IIT Roorkee & Inventis Lab)</p>
            <div></div>
          </div>
          <div>
            <h1>Vehicle Tracking</h1>
            <p>(GKM Energy)</p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
