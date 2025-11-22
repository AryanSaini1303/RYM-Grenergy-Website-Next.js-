'use client';

import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';
import { ArrowRightUp } from '@/components/Arrow';
import { useState } from 'react';
import Achievements from '@/components/Achievements';

export default function Home() {
  const [isHoveringProducts, setIsHoveringProducts] = useState(null);
  return (
    <div className="wrapper">
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.blur}></div>
        <div className={styles.overlayContent}>
          <h1>Tranform Your Energy Systems for Tomorrow's Demands</h1>
          <p>
            We build intelligent energy management solutions that optimize
            efficiency, reduce costs, and future-proof your infrastructure.
          </p>
          <button>
            Get Started <ArrowRightUp />
          </button>
        </div>
        <Image
          src={'/images/hero.jpeg'}
          alt="Hero Image"
          width={10000}
          height={10000}
        />
      </section>
      <section className={styles.aboutSection} id="about">
        <div className={styles.infoContainer}>
          <h1>About Us</h1>
          <p>
            RYM Grenergy is an innovative tech company specialising in
            sustainable energy solutions, smart automation, and renewable
            technologies. It develops eco-friendly battery systems, AI-powered
            inverters, and IoT automation devices to optimise energy efficiency
            and reduce environmental impact. RYM is actively working on
            solid-state battery technology, smart grid integration, and EV
            testbeds, collaborating with industry leaders to drive the future of
            green energy and smart infrastructure.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={'/images/img1.jpeg'}
            alt="Section Image"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className={styles.statsContainer}>
        <div className={styles.col}>
          <p>Founded</p>
          <h1>2023</h1>
          <p>A diverse, inter-disciplinary team of talent.</p>
        </div>
        <div className={styles.col}>
          <p>Reduced Footprint</p>
          <h1>80%</h1>
          <p>
            Lower CO₂ emissions compared to conventional energy manufacturing.
          </p>
        </div>
        <div className={styles.col}>
          <p>Smart Manufacturing</p>
          <h1>
            4.0<span>ready</span>
          </h1>
          <p>
            Automated, data-driven production ecosystems powered by IOT and AI.
          </p>
        </div>
      </section>
      <section className={styles.specialitiesSection}>
        <div className={styles.tab}>
          <div className={styles.infoContainer}>
            <h1>
              Manufacturer of sustainable <span>technologies</span>
            </h1>
            <p>
              Building the future of clean energy through AI, IOT, and smart
              automation-powering a more efficent and sustainble world.
            </p>
            <button className={styles.knowMoreBtn}>Know more</button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/ev.jpeg'}
              alt="EV Charging"
              height={2000}
              width={2000}
            />
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.infoContainer}>
            <h1>
              Innovator in renewable energy &amp; <span>smart systems</span>
            </h1>
            <p>
              Advancing sustainable power through AI, IOT, and intelligent
              automation for a smarter, greener future.
            </p>
            <button className={styles.knowMoreBtn}>Know more</button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={'/images/processor.jpeg'}
              alt="Processors"
              height={2000}
              width={2000}
            />
          </div>
        </div>
      </section>
      <section className={styles.partnerContainer} id="clients">
        <div>
          <Image
            src={'/images/gd goenka.png'}
            alt="partner"
            width={2000}
            height={2000}
          />
        </div>
        <div>
          <Image
            src={'/images/iit.png'}
            alt="partner"
            width={2000}
            height={2000}
          />
        </div>
        <div>
          <Image
            src={'/images/synchronous.png'}
            alt="partner"
            width={2000}
            height={2000}
          />
        </div>
        <div>
          <Image
            src={'/images/gkm.png'}
            alt="partner"
            width={2000}
            height={2000}
          />
        </div>
      </section>
      <section className={styles.products} id="products">
        <h1>Featured Products</h1>
        <div className={styles.cardContainer}>
          <div
            onMouseEnter={() => {
              setIsHoveringProducts(0);
            }}
            onMouseLeave={() => {
              setIsHoveringProducts(null);
            }}
          >
            <h1>Ultron</h1>
            <div className={styles.imageContainer}>
              <Image
                src={'/images/product4.jpeg'}
                alt="product"
                width={2000}
                height={2000}
              />
              {isHoveringProducts === 0 && (
                <p>
                  Ultron is a next-generation sustainable battery technology
                  designed to replace conventional lithium-based systems with
                  safer, greener, and high-performance materials. It delivers
                  high energy density, rapid turnaround time, and strong cycle
                  life while eliminating the environmental and ethical issues
                  tied to lithium and cobalt. Built for EVs and advanced energy
                  applications, Ultron enables cleaner manufacturing, lower
                  carbon footprint, and a more resilient supply chain—making it
                  a transformative alternative for future mobility and power
                  systems.
                </p>
              )}
            </div>
            <button className={styles.knowMoreBtn}>Know More</button>
          </div>
          <div
            onMouseEnter={() => {
              setIsHoveringProducts(1);
            }}
            onMouseLeave={() => {
              setIsHoveringProducts(null);
            }}
          >
            <h1>AI-Drive Through</h1>
            <div className={styles.imageContainer}>
              <Image
                src={'/images/product1.jpeg'}
                alt="product"
                width={2000}
                height={2000}
              />
              {isHoveringProducts === 1 && (
                <p>
                  AI DriveThrough is an intelligent traffic-optimization system
                  that guides vehicles at ideal speeds to bypass red lights,
                  reduce travel time, and cut fuel consumption. By integrating
                  real-time data, smart routing, and social connectivity
                  features, it transforms daily commuting into a faster,
                  smoother, and more efficient experience for urban drivers.
                </p>
              )}
            </div>
            <button className={styles.knowMoreBtn}>Know More</button>
          </div>
          <div
            onMouseEnter={() => {
              setIsHoveringProducts(2);
            }}
            onMouseLeave={() => {
              setIsHoveringProducts(null);
            }}
          >
            <h1>REEWS</h1>
            <div className={styles.imageContainer}>
              <Image
                src={'/images/product3.png'}
                alt="product"
                width={2000}
                height={2000}
              />
              {isHoveringProducts === 2 && (
                <p>
                  REEWS EQ Alert is a Regional Earthquake Early Warning System
                  designed to detect seismic activity within seconds and issue
                  instant alerts to reduce loss of life and infrastructure
                  damage. Using real-time ground motion sensing, fast data
                  processing, and automated notification networks, it provides
                  communities, industries, and critical infrastructure with
                  precious lead time to take protective action.
                </p>
              )}
            </div>
            <button className={styles.knowMoreBtn}>Know More</button>
          </div>
        </div>
        <button className={styles.shopBtn}>
          Shop All <ArrowRightUp />
        </button>
      </section>
      <Achievements />
    </div>
  );
}
