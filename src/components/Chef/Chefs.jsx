import styles from "./Chefs.module.css";
import { nicolas, marie, jino } from "../../assets";

const Chefs = () => (
  <section className={styles.chefs}>
    <div className="container">
      <div className="left-child">
        <h2>Nicolas Bart</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          corporis architecto quidem, magnam error sunt vitae doloremque natus
          similique sint veritatis fugiat necessitatibus laudantium ullam, harum
          autem, modi eaque voluptatum?
        </p>
      </div>
      <div className="right-child">
        <img src={nicolas} alt="Nicolas Bart" />
      </div>
    </div>
    <div className="container">
      <div className="left-child">
        <img src={marie} alt="Marie Lengt" />
      </div>
      <div className="right-child">
        <h2>Marie Lengt</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          voluptatum! Accusantium suscipit perferendis reiciendis laudantium
          molestiae labore, dolor ad quia, error placeat dolorum, maxime unde
          explicabo iste qui neque magni!
        </p>
      </div>
    </div>
    <div className="container">
      <div className="left-child">
        <h2>Jino Shoji</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
          nisi accusamus ducimus quae porro possimus dolorem fugit, commodi
          vitae reiciendis, ex veniam hic perferendis repudiandae. Odit magni
          sint mollitia.
        </p>
      </div>
      <div className="right-child">
        <img src={jino} alt="Jino Shoji" />
      </div>
    </div>
  </section>
);
export default Chefs;
