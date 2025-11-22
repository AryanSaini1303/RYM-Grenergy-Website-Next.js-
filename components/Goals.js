import styles from './Goals.module.css';

import Image from 'next/image';

export default function Goals() {
  return (
    <section className={styles.goalContainer}>
      <div className={styles.infoContainer}>
        <header>
          <h2>Sustainable <br />Development</h2>
          <h1>Goals</h1>
        </header>
        <p>
          We strongly believe in the Sustainable Development Goals set out by
          the United Nations. These goals call to end poverty, protect the
          planet, and ensure that all people enjoy peace and prosperity by 2030
          so that we leave the planet in a better place for future generations.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={'/images/sdg1.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg2.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg3.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg4.png'} alt="sdg" width={2000} height={2000} />
        <Image src={'/images/sdg5.png'} alt="sdg" width={2000} height={2000} />
      </div>
    </section>
  );
}
