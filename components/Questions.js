import { ArrowRightUp } from './Arrow';
import styles from './Questions.module.css';

import { Accordion, AccordionItem } from '@heroui/accordion';

export default function Questions() {
  const headings = [
    'What does RYM Grenergy specialize in?',
    'What is Ultron?',
    'How much energy capacity does RYM offer?',
    'When was a RYM Grenenrgy founded?',
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
  return (
    <section className={styles.questionsContainer}>
      <header>
        <h1>
          Your Questions <br /> Answered...
        </h1>
      </header>
      <div className={styles.accordionContainer}>
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
