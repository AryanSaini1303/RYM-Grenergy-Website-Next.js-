import { ArrowRightUp } from './Arrow';
import styles from './KnowMoreButton.module.css';

export default function KnowMoreButton({ children }) {
  return (
    <button className={styles.shopBtn}>
      {children}
      <ArrowRightUp />
    </button>
  );
}
