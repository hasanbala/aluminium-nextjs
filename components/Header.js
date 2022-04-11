import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbartop}>
        <ul>
          <li className={styles["icon-facebook"]}>
            <Link href='https://www.ldp.org.tr/'>
              <a target='_blank'>
                <i className='fab fa-facebook'></i>
              </a>
            </Link>
          </li>
          <li className={styles["icon-instagram"]}>
            <Link href='https://www.ldp.org.tr/'>
              <a target='_blank'>
                <i className='fab fa-instagram '></i>
              </a>
            </Link>
          </li>
          <li className={styles["icon-twitter"]}>
            <Link href='https://www.ldp.org.tr/'>
              <a target='_blank'>
                <i className='fab fa-twitter '></i>
              </a>
            </Link>
          </li>
          <li className={styles["icon-linkedin"]}>
            <Link href='https://www.linkedin.com/in/hasan-bala/'>
              <a target='_blank'>
                <i className='fab fa-linkedin'></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className={styles["navbar-hr"]} />
      <nav className={styles.navbarsub}>
        <div className={styles["navbarsub-list"]}>
          <ul id='myTopnav'>
            <li className={styles.logo}>
              <Image
                className={styles["logo-img"]}
                src='/favicon/logox.png'
                height={32}
                width={32}
                alt='LOGO'
              />
              <Link href='/'>
                <a className={styles["brand-a"]}>
                  <h1>ABK Alüminyum</h1>
                </a>
              </Link>
            </li>
            <li className={styles.toggle}>
              <i className='fas fa-align-justify'></i>
            </li>
            <li className={styles.item}>
              <Link href='/'>
                <a data-hover='ANASAYFA'>ANASAYFA</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='/about'>
                <a data-hover='HAKKIMIZDA'>HAKKIMIZDA</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='/products/prindex'>
                <a data-hover='ÜRÜNLER'>ÜRÜNLER</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='/catalog'>
                <a data-hover='KATALOG'>KATALOG</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href='/contact'>
                <a data-hover='İLETİŞİM'>İLETİŞİM</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div id='myNav' className={styles.overlay}>
          <a className={styles.closebtn}>&times;</a>
          <div className={styles["overlay-content"]}>
            <a href='index.html'>ANASAYFA</a>
            <a href='about.html'>HAKKIMIZDA</a>
            <a href='products.html'>ÜRÜNLER</a>
            <a href='catalog.html'>KATALOG</a>
            <a href='contact.html'>İLETİŞİM</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
