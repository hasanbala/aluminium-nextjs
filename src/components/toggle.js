import Link from "next/link";
import styles from "@styles/toggle.module.scss";
import clsx from "clsx";

const Toggle = ({ toggle, handleOpenToggle }) => {
  const toggleStyle = clsx({
    [styles.overlayClick]: toggle === true,
    [styles.overlay]: toggle === false,
  });

  return (
    <div id='myNav' className={toggleStyle}>
      <a href='#!' className={styles.closebtn} onClick={handleOpenToggle}>
        &times;
      </a>
      <div className={styles["overlay-content"]}>
        <ul>
          <div onClick={handleOpenToggle}>
            <li>
              <Link href='/'>
                <a>ANASAYFA</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>HAKKIMIZDA</a>
              </Link>
            </li>
            <li>
              <Link href='/products/mafsal'>
                <a>ÜRÜNLER</a>
              </Link>
            </li>
            <li>
              <Link href='/catalog'>
                <a>KATALOG</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>İLETİŞİM</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Toggle;
