'use client';

import styles from './Goals.module.css';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function Goals() {
  const [isMobile, setIsMobile] = useState(false);
  const container = useRef(null);

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.from('.imageContainer img', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
          // markers:true
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
      gsap.from('.infoContainer  *', {
        x: -20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
          // markers:true
        },
      });
    },
    {
      revertOnUpdate: true,
      dependencies: [isMobile],
      scope: container,
    },
  );

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className={styles.goalContainer} ref={container}>
      <div className={`${styles.infoContainer} infoContainer`}>
        <header>
          <h2>
            Sustainable <br />
            Development
          </h2>
          <h1>Goals</h1>
        </header>
        <p>
          We strongly believe in the Sustainable Development Goals set out by
          the United Nations. These goals call to end poverty, protect the
          planet, and ensure that all people enjoy peace and prosperity by 2030
          so that we leave the planet in a better place for future generations.
        </p>
      </div>
      <div className={`${styles.imageContainer} imageContainer`}>
        <Image src={'/images/sdg1.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg2.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg3.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg4.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg5.png'} alt="sdg" width={2000} height={2000} />
      </div>
    </section>
  );
}
