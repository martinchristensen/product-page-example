import styles from "./Home.module.css";
import GenericPants from "./genricPants";

const HomePage = () => {
  return (
    <main className={styles.mainWrapper }>
      <div className={styles.twoColWrapper}>
        <GenericPants />
      </div>
    </main>
  );
};

export default HomePage;
