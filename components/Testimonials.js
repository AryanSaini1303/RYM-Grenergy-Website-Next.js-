'use client';

import Image from 'next/image';
import styles from './Testimonials.module.css';
import KnowMoreButton from './KnowMoreButton';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Testimonials() {
  const container = useRef(null);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
        '.gridContainer div:nth-child(2), .gridContainer div:nth-child(5)',
        { y: 50, opacity: 0 },
        {
          y: -90,
          opacity: 1,
          duration: 1,
          ease: 'power2.out()',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
            // markers: true,
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
      gsap.fromTo(
        '.gridContainer div:not(:nth-child(2)):not(:nth-child(5))',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out()',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
            // markers: true,
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

  return (
    <section
      className={`${styles.testimonialContainer} testimonialContainer`}
      id="testimonials"
      ref={container}
    >
      <header ref={headerRef}>
        <h1>Testimonials</h1>
        <h1>Wall of Love...</h1>
      </header>
      <div className={`${styles.gridContainer} gridContainer`}>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/arc.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>12 March 2024</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              The level of professionalism and technical mastery Rym Grenergy
              brings is unmatched. They delivered exactly what they promised—and
              more.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/devam.jpg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>Synchronous Build Digital</p>
              <p>28 July 2023</p>
            </header>
            <h1>Devam Srivastava</h1>
            <h3>CEO</h3>
            <p className={styles.para}>
              We&apos;ve never worked with a team this committed to excellence.
              Their solutions are reliable, futuristic, and built to scale.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/gaurav.jpg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GKM Energy</p>
              <p>5 November 2022</p>
            </header>
            <h1>Gaurav Minda</h1>
            <h3>CEO</h3>
            <p className={styles.para}>
              Rym Grenergy transformed our energy systems with precision and
              innovation. Their tech-first approach saved us both time and
              money.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/apk.jpg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>19 January 2025</p>
            </header>
            <h1>Dr. Apeksha Mittal</h1>
            <h3>Associate Professor</h3>
            <p className={styles.para}>
              Rym Grenergy doesn&apos;t just solve problems—they redefine
              what&apos;s possible. Working with them has been a complete
              game-changer.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/dh.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>BWorth</p>
              <p>3 September 2023</p>
            </header>
            <h1>Mr. Dheeraj Anand</h1>
            <h3>CEO</h3>
            <p className={styles.para}>
              From concept to execution, Rym Grenergy made everything seamless.
              Their attention to detail truly sets them apart.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/adi.png'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>InventisLabs</p>
              <p>4 June 2024</p>
            </header>
            <h1>Mr. Arun</h1>
            <h3>Co - Founder</h3>
            <p className={styles.para}>
              Our operations became dramatically more efficient after partnering
              with Rym Grenergy. Their technology is as impressive as their
              support.
            </p>
          </div>
        </div>
        <div className={styles.btn}>
          <KnowMoreButton>Read All</KnowMoreButton>
        </div>
      </div>
    </section>
  );
}
