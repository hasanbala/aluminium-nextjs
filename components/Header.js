import { useEffect, useRef } from "react";
import Toggle from "./toogle";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.scss";

const Header = () => {
  const openNav = useRef();
  const closeNav = useRef();
  const closeNavX = useRef();

  useEffect(() => {
    openNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "100%");
    };
    closeNavX.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
    closeNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
  }, [openNav]);

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
            <li className={styles.toggle} ref={openNav}>
              <i className='fas fa-align-justify' />
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
              <Link href='/products/mafsal'>
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
      <Toggle closeNavX={closeNavX} closeNav={closeNav} />
    </header>
  );
};

export default Header;
