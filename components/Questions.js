import { ArrowRightUp } from './Arrow';
import styles from './Questions.module.css';

import { Accordion, AccordionItem } from '@heroui/accordion';

export default function Questions() {
  const defaultContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates explicabo unde reiciendis voluptatibus, nemo cum ducimus est labore perferendis.';
  const headings = [
    'What does RYM Grenergy specialize in?',
    'What is Ultron?',
    'How much energy capacity does RYM offer?',
    'When wasa RYM Gerenrgy founded?',
    'What recognition has RYM received?',
    'Are RYM products environmentally firendly?',
  ];
  const para = [
    'RYM Grenergy focueses on developing AI-, IOT-, and ML- powered renewable energy and automation technologies to create smarter, sustainable systems.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aspernatur nostrum doloribus itaque ducimus ipsum porro molestiae quam consequatur numquam?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aspernatur nostrum doloribus itaque ducimus ipsum porro molestiae quam consequatur numquam?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aspernatur nostrum doloribus itaque ducimus ipsum porro molestiae quam consequatur numquam?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aspernatur nostrum doloribus itaque ducimus ipsum porro molestiae quam consequatur numquam?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aspernatur nostrum doloribus itaque ducimus ipsum porro molestiae quam consequatur numquam?',
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
