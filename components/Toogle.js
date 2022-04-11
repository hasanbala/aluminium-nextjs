import Link from "next/link";
import styles from "../styles/Toogle.module.scss";

const Toggle = ({ closeNavX, closeNav }) => {
  return (
    <div id='myNav' className={styles.overlay}>
      <a href='#!' className={styles.closebtn} ref={closeNavX}>
        &times;
      </a>
      <div className={styles["overlay-content"]}>
        <ul>
          <div ref={closeNav}>
            <li>
              <Link href='/'>
                <a>ANASAYFA</a>
              </Link>
            </li>
            <li>
              <Link href='/products/prindex'>
                <a>ÜRÜNLER</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>HAKKIMIZDA</a>
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
