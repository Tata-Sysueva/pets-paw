import styles from './NotFoundScreen.module.scss';

function NotFoundScreen(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            Looks like you&apos;re lost, friend
          </h1>
          <p>
            The page you are looking for can&apos;t be found. Error 404.
          </p>
          <a href="/">Back to home</a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundScreen;
