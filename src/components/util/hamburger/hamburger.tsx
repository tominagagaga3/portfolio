import { useState, type FC } from "react";
import styles from "./hamburger.module.scss";

const menuList = [
  { label: "料金表", url: "/pricing" },
  { label: "イベントレポート", url: "/event-reports" },
];

const HamburgerComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen && styles.hamburgerActive}`}
        onClick={toggleMenu}
      >
        <span className={styles.line}></span>
      </div>
      <div className={`${styles.menuContainer} ${isOpen && styles.active}`}>
        <nav>
          <ul>
            {menuList.map(menu => (
              <li key={menu.label} className={styles.menuList}>
                <a href={menu.url}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerComponent;
