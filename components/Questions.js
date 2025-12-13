'use client';

import { ArrowRightUp } from './Arrow';
import styles from './Questions.module.css';
import { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionItem } from '@heroui/accordion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Questions() {
  const headings = [
    'What does RYM Grenergy specialize in?',
    'What is Ultron?',
    'How much energy capacity does RYM offer?',
    'When was RYM Grenergy founded?',
    'What recognition has RYM received?',
    'Are RYM products environmentally friendly?',
  ];
  const para = [
    'RYM Grenergy focueses on developing AI-, IOT-, and ML- powered renewable energy and automation technologies to create smarter, sustainable systems.',
    'Ultron is our next-gen battery technology built for cleaner, safer and more efficient energy storage—engineered to power the future without harming it.',
    'RYM provides energy solutions from compact 1.8 kWh units to powerful 15 kWh systems, designed for everything from small devices to full-scale mobility.',
    'RYM Grenergy was founded on 2nd Jan 2023 with a simple mission—build sustainable energy technologies that India can proudly call its own.',
    'RYM has earned multiple national innovation awards and hackathon wins, celebrating our work in clean energy, EV systems, and deep-tech engineering. The recent on being KPIT Sparkle Gold Award.',
    'Absolutely. Our products focus on sustainable materials, reduced chemical impact, ethical sourcing, and recyclable designs—clean energy at every step.',
  ];
  const container = useRef(null);
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
      gsap.from('.accordionContainer div div', {
        y: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
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
      gsap.from('.accordionContainer div hr', {
        width: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
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
      gsap.from('.questionsContainer header', {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
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

  return (
    <section
      className={`${styles.questionsContainer} questionsContainer`}
      ref={container}
    >
      <header>
        <h1>
          Your Questions <br /> Answered...
        </h1>
      </header>
      <div className={`${styles.accordionContainer} accordionContainer`}>
        <Accordion>
          {headings.map((heading, index) => (
            <AccordionItem
              key={index}
              aria-label={heading}
              title={heading}
              indicator={({ isOpen }) => (
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
                  }}
                >
                  <ArrowRightUp color={'white'} />
                </span>
              )}
            >
              {para[index]}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
