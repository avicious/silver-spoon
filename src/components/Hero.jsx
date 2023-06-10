import { heroMain, heroLeft, heroRight } from "../assets";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.hero}>
    <h1>Welcome to Silver Spoon</h1>
    <div className={styles.imageSection}>
      <div className={styles.sideImg}>
        <img src={heroLeft} alt="food" />{" "}
        <p>From 2007 Silver Spoon provides a unique dining experience</p>
      </div>
      <div className={styles.mainImg}>
        <img src={heroMain} alt="restaurant" />
      </div>
      <div className={styles.sideImg}>
        <img src={heroRight} alt="food" />
        <p>
          Welcome to Silver Spoon, where exquisite cuisine meets warm
          hospitality
        </p>
      </div>
    </div>
  </section>
);
export default Hero;
