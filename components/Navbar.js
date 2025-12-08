'use client';

import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const url = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoWrapper}>
        <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
      </Link>
      <ul className={styles.tabs}>
        <li className={url === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <section className={styles.btnContainer}>
        <button>
          <Link href="/doc.pdf" download>
            Download Pitch Deck
          </Link>
        </button>
        <button>
          <Link href="/">Book a Free Demo</Link>
        </button>
      </section>
      <button
        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileTabs}>
            <li className={url === '/' ? styles.active : ''}>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#products" onClick={closeMenu}>
                Products
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <section className={styles.mobileBtns}>
            <button onClick={closeMenu}>
              <Link href="/images/logo.png" download>
                Download Pitch Deck
              </Link>
            </button>
            <button onClick={closeMenu}>
              <Link href="/">Book a Free Demo</Link>
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
