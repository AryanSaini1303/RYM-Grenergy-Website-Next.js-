'use client';

import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const url = usePathname();

  return (
    <div className={styles.container}>
      <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
      <ul className={styles.tabs}>
        <li className={url == '/' ? styles.active : null}>
          <Link href="/">Home</Link>
        </li>
        <li className={url == '/about' ? styles.active : null}>
          <Link href="#about">About</Link>
        </li>
        <li className={url == '/products' ? styles.active : null}>
          <Link href="#products">Products</Link>
        </li>
        <li className={url == '/clients' ? styles.active : null}>
          <Link href="#clients">Clients</Link>
        </li>
        <li className={url == '/contact' ? styles.active : null}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <section className={styles.btnContainer}>
        <button>
          <Link href={'/images/logo.png'} download={true}>
            Download Pitch Deck
          </Link>
        </button>
        <button>
          <Link href={'/'}>Book a Free Demo</Link>
        </button>
      </section>
    </div>
  );
}
