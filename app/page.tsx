import Selector from "../components/selector";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <main>
      <div className={styles.twoColWrapper}>
        <section>
            sdsd
        </section>
        <section>
          <h1>Generic Shoe</h1>
          <h2>$95 SGD</h2>
          <div>
            reviews ----
          </div>
          <h3>Select color</h3>
          <Selector selectableItems={[{id: 1, value:"blue", element:<span>blue</span>},{id: 2, value:"red", element:<span>red</span>}]} />
          <h3>Select size</h3>

        </section>
      </div>
    </main>
  );
};

export default HomePage;
