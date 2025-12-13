'use client';

import Image from 'next/image';
import styles from './Achievements.module.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import KnowMoreButton from './KnowMoreButton';
import { useEffect, useRef, useState } from 'react';

export default function Achievements() {
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
      gsap.fromTo(
        '.achievements .gridContainer .tabs:nth-child(1)',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            // markers: true,
            trigger: container.current,
            start: 'top 60%',
            // end: 'bottom 10%',
            // scrub: true,
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { revertOnUpdate: true, dependencies: [isMobile], scope: container },
  );

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.fromTo(
        '.achievements .gridContainer .tabs:not(:first-of-type)',
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            // markers: true,
            trigger: container.current,
            start: 'top 5%',
            // end: 'bottom 10%',
            // scrub: true,
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { revertOnUpdate: true, dependencies: [isMobile], scope: container },
  );

  return (
    <section className={`${styles.achievements} achievements`} ref={container}>
      <h1>Latest Achievements</h1>
      <div className={`${styles.gridContainer} gridContainer`}>
        <div className={`${styles.tabs} tabs`}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/kpit.png'}
              width={2000}
              height={2000}
              alt="Achievement Image"
            />
          </div>
          <div className={styles.infoContainer}>
            <h5>Recognition</h5>
            <h1>Gold Award at KPIT SPARKLE</h1>
            <p>
              Honored for innovation in sustainable technology and smart energy
              systems, driving the future of green innovation.
            </p>
            <button className={styles.knowMoreBtn}>Learn more</button>
          </div>
        </div>
        <div className={`${styles.tabs} tabs`}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/journey.png'}
              width={2000}
              height={2000}
              alt="Achievement Image"
            />
          </div>
          <div className={styles.infoContainer}>
            <h5>Awards</h5>
            <h1>A Journey of Stellar Success</h1>
          </div>
        </div>
        <div className={`${styles.tabs} tabs`}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/ultron.jpeg'}
              width={2000}
              height={2000}
              alt="Achievement Image"
            />
          </div>
          <div className={styles.infoContainer}>
            <h5>Blog</h5>
            <h1>Everything You Need To Know About ULTRON</h1>
          </div>
        </div>
        <div className={`${styles.tabs} tabs`}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/innovation.jpg'}
              width={2000}
              height={2000}
              alt="Achievement Image"
            />
          </div>
          <div className={styles.infoContainer}>
            <h5>Innovation</h5>
            <h1>AI-powered inverters, and IOT automation devices</h1>
          </div>
        </div>
        <div className={styles.btn}>
          <KnowMoreButton>Read All</KnowMoreButton>
        </div>
      </div>
    </section>
  );
}
