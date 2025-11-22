import Image from 'next/image';
import styles from './Testimonials.module.css';
import KnowMoreButton from './KnowMoreButton';

export default function Testimonials() {
  return (
    <section className={styles.testimonialContainer}>
      <header>
        <h1>Testimonials</h1>
        <h1>Wall of love...</h1>
      </header>
      <div className={styles.gridContainer}>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
            </p>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/product1.jpeg'}
              alt={'testimonials'}
              width={2000}
              height={20000}
            />
          </div>
          <div className={styles.infoContainer}>
            <header>
              <p>GD Goenka</p>
              <p>17th May, 2025</p>
            </header>
            <h1>Dr. Anindita Roy</h1>
            <h3>Assistant Dean</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              numquam ad qui consequuntur animi, temporibus pariatur quibusdam
              velit quos. Quisquam.
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
