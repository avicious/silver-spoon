import Items from "./Items";
import styles from "./MenuItem.module.css"

const MenuItem = ({ menu }) => {
  return (
    <section className={styles.wrapper}>
      {menu.map((item) => (
        <Items key={item[0].type} items={[...item]} />
      ))}
    </section>
  );
};
export default MenuItem;
