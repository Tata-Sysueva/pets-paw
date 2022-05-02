import styles from './Welcome.module.scss';

function Welcome() {
  return  (
    <section className={styles.section}>
      <h2 className={styles.title}>Hi, friends!</h2>
      <p className={styles.text}>Welcome our site</p>
    </section>
  );
}

export default Welcome;
