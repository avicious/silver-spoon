import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <section className={styles.main}>
      <p>
        Sorry, we couldn't find what you were looking for, try going back home.
      </p>
      <Link to="/">Home</Link>
    </section>
  );
};
export default Error;
