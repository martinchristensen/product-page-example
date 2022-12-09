import MenuButton from "./(components)/(buttons)/MenuButton";
import styles from "./topbar.module.css";

const Topbar = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftOfBar}>
          <a href="https://martin.codes/">
            <MenuButton text="See my other projects at martin.codes" />
          </a>
        </div>
        <div className={styles.buttonsContainer}>
          <a
            href="https://github.com/martinchristensen/product-page-example"
            target="_blank"
          >
            <MenuButton text="Repository" />
          </a>
          <a
            href="https://product-page-example-storybook.netlify.app"
            target="_blank"
          >
            <MenuButton text="Docs" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
