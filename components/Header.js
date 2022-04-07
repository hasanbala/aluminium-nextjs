import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a className={router.pathname === "/" ? "active" : ""}>
                Anasayfa
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href='/page1'>
              <a className={router.pathname === "/page1" ? "active" : ""}>
                Page 1
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href='/page2'>
              <a className={router.pathname === "/page2" ? "active" : ""}>
                Page 2
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href='/about'>
              <a className={router.pathname === "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href='/lala'>
              <a className={router.pathname === "/lala" ? "active" : ""}>
                LALALAL
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
