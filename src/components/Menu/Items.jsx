import Item from "./Item";
import styles from "./Items.module.css";

const Items = ({ items }) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.heading}>{items[0]["type"]}</h3>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
};
export default Items;
