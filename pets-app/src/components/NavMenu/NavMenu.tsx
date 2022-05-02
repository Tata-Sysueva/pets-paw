import styles from './NavMenu.module.scss';

function NavMenu() {
  return  (
    <section>
      <h3 className={styles.title}>Lets start using The Dogs API</h3>
      <nav className={styles.navContainer}>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageVoting}`}/>
          <a href="/#" className={styles.link}>Voting</a>
        </div>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageBreeds}`}/>
          <a href="/#" className={styles.link}>Breeds</a>
        </div>
        <div className={styles.linkCard}>
          <div className={`${styles.image} ${styles.imageGallery}`}/>
          <a href="/#" className={styles.link}>Gallery</a>
        </div>
      </nav>
    </section>
  );
}

export default NavMenu;
