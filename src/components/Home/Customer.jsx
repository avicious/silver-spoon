import styles from "./Customer.module.css";

const Customer = ({ image, user, comment }) => (
  <div className={styles.customer}>
    <div className={styles.person}>
      <img src={image} alt={user} />
      <div>
        <p>{user}</p>
        <p>Customer</p>
      </div>
    </div>
    <p>"{comment}"</p>
  </div>
);

export default Customer;
