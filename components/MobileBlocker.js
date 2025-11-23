'use client';

import { useEffect, useState } from 'react';

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h1 style={styles.title}>Mobile View Under Development</h1>
        <p style={styles.text}>
          We're crafting a stunning mobile experience for you. For now, please
          open the website on a laptop or desktop to continue.
        </p>
        <p style={styles.subtext}>— Thank you for your patience &hearts;</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'linear-gradient(135deg, #0d0d0f 0%, #1a1a1d 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
    fontFamily: "'Nunito', sans-serif",
    fontOpticalSizing: 'auto',
    fontWeight: '350',
    fontStyle: 'normal',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '40px 30px',
    width: '100vw',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 40px rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '15px',
  },
  text: {
    color: '#bdbdbd',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '15px',
  },
  subtext: {
    color: '#777',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
};
