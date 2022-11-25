import StarsProgress from "./(components)/(progress-bar)/stars-progress";
import ColorSelector from "./(components)/(selector)/colorSelector";
import SizeSelector from "./(components)/(selector)/sizeSelector";
import styles from "./Home.module.css";
import PantsSlider from "./pantsSlider";
import { Inter, Lato } from '@next/font/google';


const stars = 2.0;
const reviews = 12;

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({weight: '700'})

const HomePage = () => {
  return (
    <main className={styles.mainWrapper }>
      <div className={styles.twoColWrapper}>
        <section>
          <PantsSlider />
        </section>
        <section>
          <h1 className={inter.className}>Generic pants</h1>
          <h2 className={lato.className}>$95 SGD</h2>
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
              <h3 className={inter.className}>Select color</h3>
              <ColorSelector />
            </div>
            <Divider />
            <div className={styles.detailsContainer}>
              <h3 className={inter.className}>Select size</h3>
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
