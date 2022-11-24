import StarsProgress from "./(components)/(progress-bar)/stars-progress";
import ColorSelector from "./(components)/(selector)/colorSelector";
import SizeSelector from "./(components)/(selector)/sizeSelector";
import styles from "./Home.module.css";
import ShoeSlider from "./shoeSlider";

const stars = 2.0;
const reviews = 12;

const HomePage = () => {
  return (
    <main>
      <div className={styles.twoColWrapper}>
        <section>
          <ShoeSlider />
        </section>
        <section>
          <h1>Generic Shoe</h1>
          <h2>$95 SGD</h2>
          <div className={styles.reviewContainer}>
            <StarsProgress
              stars={stars}
              backgroundColor={"rgb(235, 235, 235)"}
            />
            <span>
              <a href="#">{reviews} reviews</a>
            </span>
          </div>
          <div className={styles.detailsWrapper }>
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
          </div>
        </section>
      </div>
    </main>
  );
};

const Divider = () => {
  return <div className={styles.divider}></div>;
};

export default HomePage;
