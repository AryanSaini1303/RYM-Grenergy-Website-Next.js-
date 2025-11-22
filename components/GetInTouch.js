import styles from './GetInTouch.module.css';
import { useState } from 'react';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
  }

  return (
    <section className={styles.GetInTouchSection}>
      <div className={styles.infoContainer}>
        <h1>Get In Touch With Us!</h1>
        <p>
          Began your journey at RYM. Fill in your details and our team will
          reach out to you
        </p>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name"></label> */}
          <input
            type="text"
            required
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name *'
          />
          {/* <label htmlFor="phone"></label> */}
          <input
            type="text"
            required
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone Number *'
          />
          {/* <label htmlFor="email"></label> */}
          <input
            type="email"
            required
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email *'
          />
          <button type="submit">Submit</button>

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
