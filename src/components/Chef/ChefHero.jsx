import {
  heroMain,
  heroLeft,
  heroRight,
  chefCircle,
  chefLeft,
  chefRight,
} from "../../assets";
import styles from "./ChefHero.module.css";

const Hero = () => (
  <section className={styles.hero}>
    <h2>
      Ted Nasso,
      <br /> The Architect Of Cuisine
    </h2>
    <div className={styles.imageSection}>
      <div className={styles.sideImg}>
        <img src={chefLeft} alt="food" />{" "}
        <p>
          The food is arranged on the plate in an aesthetically pleasing way
        </p>
      </div>
      <div className={styles.mainImg}>
        <img src={chefCircle} alt="restaurant" />
      </div>
      <div className={styles.sideImg}>
        <img src={chefRight} alt="food" />
        <p>
          Typically sourced from local farmers and markets to ensure their
          freshness
        </p>
      </div>
    </div>
  </section>
);
export default Hero;
