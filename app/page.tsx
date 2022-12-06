import StarsProgress from "./(components)/(progress-bar)/stars-progress";
import ColorSelector from "./(components)/(selector)/colorSelector";
import SizeSelector from "./(components)/(selector)/sizeSelector";
import styles from "./Home.module.css";
import PantsSlider from "./pantsSlider";
import { Inter, Lato } from '@next/font/google';
import GenericPants from "./genricPants";


const stars = 2.0;
const reviews = 12;

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({weight: '700', subsets: ['latin']})

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
