'use client';

import styles from './GetInTouch.module.css';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
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
      gsap.from('.formContainer input', {
        y: -30,
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

  useGSAP(
    () => {
      if (isMobile) return;
      gsap.from('.infoContainer *', {
        x: -50,
        opacity: 0,
        duration: 2,
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    if (formData.phone.length !== 10 || !parseInt(formData.phone)) {
      alert('Please enter a valid 10 digit number!');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error.includes('duplicate')) {
          alert(
            "You are already in our contact list, we'll get in touch soon :)",
          );
        } else {
          console.error('Error:', data.error);
          alert(`Server Error: ${data.error}`);
        }
        setLoading(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
        });
        return;
      }
      // console.log('Success:', data);
      // Reset form after success
      setFormData({
        name: '',
        phone: '',
        email: '',
      });
      alert("Your details are recorded successfully!, we'll contact soon :)");
      setLoading(false);
    } catch (err) {
      console.error('Request failed:', err);
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <section className={styles.GetInTouchSection} id="contact" ref={container}>
      <div className={`${styles.infoContainer} infoContainer`}>
        <h1>Get In Touch With Us!</h1>
        <p>
          Began your journey at RYM. Fill in your details and our team will
          reach out to you
        </p>
      </div>

      <div className={`${styles.formContainer} formContainer`}>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name"></label> */}
          <input
            type="text"
            required
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
          />
          {/* <label htmlFor="phone"></label> */}
          <input
            type="text"
            required
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
          />
          {/* <label htmlFor="email"></label> */}
          <input
            type="email"
            required
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          <p className={styles.disclaimer}>
            By clicking on "Submit" you are agreeing to our Privacy Policy and
            are allowing us (RYM Grenergy) and our service partners to get in
            touch with you.
          </p>
        </form>
      </div>
    </section>
  );
}
