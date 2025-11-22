import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projectContainer}>
      <h1>Projects</h1>
      <div className={styles.chartContainer}>
        <div className={`${styles.firstSection} ${styles.row}`}>
          <div>
            <h1>ULTRON</h1>
            <p>(Deployed with GKM Energy)</p>
            <div></div>
          </div>
          <div>
            <h1>SMART HOME AUTOMATION</h1>
            <p>(GKM Energy)</p>
            <div></div>
          </div>
          <div>
            <h1>IDP PORTAL</h1>
            <p>(GD Goenka University)</p>
            <div></div>
          </div>
          <div>
            <h1>BULK ATTENDANCE SYSTEM</h1>
            <p>(GD Goenka University)</p>
            <div></div>
          </div>
        </div>
        <div className={styles.centerSection}>
          <hr />
        </div>
        <div className={`${styles.secondSection} ${styles.row}`}>
          <div>
            <h1>AI DRIVE THROUGH</h1>
            <p>Synchronous Build Digital</p>
            <div></div>
          </div>
          <div>
            <h1>EEDW</h1>
            <p>(IIT Roorkee & Inventis Lab)</p>
            <div></div>
          </div>
          <div>
            <h1>SMART EV INTEGRATION</h1>
            <p>(GKM Energy)</p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
