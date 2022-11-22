import StarsProgress from "./(components)/(progress-bar)/stars-progress";
import ColorSelector from "./(components)/(selector)/colorSelector";
import SizeSelector from "./(components)/(selector)/sizeSelector";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <main>
      <div className={styles.twoColWrapper}>
        <section>sdsd</section>
        <section>
          <h1>Generic Shoe</h1>
          <h2>$95 SGD</h2>
          <div className={styles.detailsContainer}>
            <StarsProgress backgroundColor={'rgb(235, 235, 235)'}/>
          </div>
          <Divider />
          <div className={styles.detailsContainer}>
            <h3>Select color</h3>
            <ColorSelector />
          </div>
          <Divider />
          <div className={styles.detailsContainer}>
            <h3>Select size</h3>
            <SizeSelector />
          </div>
          <Divider />
        </section>
      </div>
    </main>
  );
};

const Divider = () => {
  return <div className={styles.divider}></div>;
};

export default HomePage;
