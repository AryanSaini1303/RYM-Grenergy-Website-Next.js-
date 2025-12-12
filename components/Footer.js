'use client'

import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { Facebook } from './Facebook';
import { Twitter } from './Twitter';
import { Instagram } from './Instagram';
import { Youtube } from './Youtube';
import { Linkedin } from './LinkedIn';
import { Whatsapp } from './Whatsapp';

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.leftSection}>
        <Image src={'/images/logo.png'} width={2000} height={2000} alt="Logo" />
        <div className={styles.paraContainer}>
          <p>Gurugram, NCR, India</p>
          <p>+91-82000-55645</p>
          <p>contact@rym-grenergy.com</p>
        </div>
        <div className={styles.logoContainer}>
          <Link href={'#'}>
            <Facebook />
          </Link>
          <Link href={'#'}>
            <Twitter />
          </Link>
          <Link href={'#'}>
            <Instagram />
          </Link>
          <Link href={'#'}>
            <Youtube />
          </Link>
          <Link href={'#'}>
            <Linkedin />
          </Link>
          <Link href={'#'}>
            <Whatsapp />
          </Link>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.tabs}>
          <h5>Products</h5>
          <ul>
            <Link href={'#products'}>
              <li>Ultron</li>
            </Link>
            <Link href={'#products'}>
              <li>AI_Drive Through</li>
            </Link>
            <Link href={'#products'}>
              <li>REZONIX</li>
            </Link>
            <Link href={'#products'}>
              <li>SMART HOME AUTOMATION SYSTEM</li>
            </Link>
            <Link href={'#products'}>
              <li>IDP PORTAL</li>
            </Link>
            <Link href={'#products'}>
              <li>SMART EV INTEGRATION</li>
            </Link>
            <Link href={'#products'}>
              <li>BULK ATTENDANCE SYSTEM</li>
            </Link>
          </ul>
        </div>
        <div className={styles.tabs}>
          <h5>Recycling</h5>
          <ul>
            <Link href={'#'}>
              <li>Overview</li>
            </Link>
            <Link href={'#'}>
              <li>Partners</li>
            </Link>
          </ul>
        </div>
        <div className={styles.tabs}>
          <h5>About Us</h5>
          <ul>
            <Link href={'#'}>
              <li>Management</li>
            </Link>
            <Link href={'#'}>
              <li>Stories</li>
            </Link>
            <Link href={'#'}>
              <li>Opinion</li>
            </Link>
          </ul>
        </div>
        <div className={styles.tabs}>
          <h5>Press</h5>
          <ul>
            <Link href={'#'}>
              <li>Press releases</li>
            </Link>
            <Link href={'#'}>
              <li>Press Resources</li>
            </Link>
          </ul>
        </div>
        <div className={styles.tabs}>
          <h5>Career</h5>
          <ul>
            <Link href={'#'}>
              <li>Life at RYM</li>
            </Link>
            <Link href={'#'}>
              <li>Categories</li>
            </Link>
            <Link href={'#'}>
              <li>Locations</li>
            </Link>
            <Link href={'#'}>
              <li>Joining Us</li>
            </Link>
            <Link href={'#'}>
              <li>All Roles</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ul>
          <Link href={'#'}>
            <li>RYM &#169; 2025</li>
          </Link>
          <Link href={'#'}>
            <li>Privacy &amp; Legal</li>
          </Link>
          <Link href={'#'}>
            <li>Vehicle Recalls</li>
          </Link>
          <Link href={'#contact'}>
            <li>Contact</li>
          </Link>
          <Link href={'#'}>
            <li>News</li>
          </Link>
          <Link href={'#'}>
            <li>Get Updates</li>
          </Link>
          <Link href={'#'}>
            <li>Locations</li>
          </Link>
          <Link href={'#'}>
            <li>Learn</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}
