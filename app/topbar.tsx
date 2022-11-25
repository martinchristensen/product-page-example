import PrimaryButton from "./(components)/(buttons)/primary";
import styles from "./topbar.module.css";

const Topbar = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftOfBar}>
          <a href="https://martin.codes/">
            <PrimaryButton text="See my other projects at martin.codes" />
          </a>
        </div>
        <div className={styles.buttonsContainer}>
          <a
            href="https://github.com/martinchristensen/product-page-example"
            target="_blank"
          >
            <PrimaryButton text="Repository" />
          </a>
          <PrimaryButton text="Docs" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
