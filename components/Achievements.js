import Image from 'next/image';
import styles from './Achievements.module.css';
import { ArrowRightUp } from './Arrow';
import KnowMoreButton from './KnowMoreButton';

export default function Achievements() {
  return (
    <section className={styles.achievements}>
      <div className={styles.tabs}>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/img1.jpeg'}
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
      <div className={styles.tabs}>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/img1.jpeg'}
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
      <div className={styles.tabs}>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/img1.jpeg'}
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
      <div className={styles.tabs}>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/img1.jpeg'}
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
    </section>
  );
}
