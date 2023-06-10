import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      <NavLink to="/" end>
        SILVER SPOON
      </NavLink>
    </div>
    <nav className={styles.desktopNav}>
      <ul>
        <li>
          <NavLink to="/" end>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chef"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            CHEF
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            MENU
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservation"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            RESERVATION
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
