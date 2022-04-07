import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles["footer-d"]}>
          <div className={styles["f-about"]}>
            <h2>HAKKIMIZDA</h2>
            <hr className={styles["footer-hr"]} />
            <p>
              ABK Alüminyum, dinamik ve gelişme odaklı yapısıyla alüminyum
              korkuluk sektörünün en genç ve en dinamik firmalarındandır.
              Alüminyum korkuluk sektöründeki ihtiyaç ve sorunları iyi analiz
              eden ve bu doğrultuda üretimden teslimata kadar titiz bir çalışma
              gayreti gösteren firmamız profesyonel yönetim ve pazarlama
              anlayışıyla kusursuz iletişim ve uzun soluklu çalışma sistemini
              benimsemiş bu doğrultuda yapılanmıştır.
            </p>
          </div>
          <div className={styles["f-address"]}>
            <h2>ADRES</h2>
            <hr className={styles["footer-hr"]} />
            <li>
              {" "}
              <i className='fas fa-map-marked-alt'></i>
              <p>ADDRESS</p>
            </li>
            <ul className={styles["footer-icon"]}>
              <li className={styles["icon-facebook"]}>
                <a target='_blank' href='https://www.ldp.org.tr/'>
                  {" "}
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li className={styles["icon-instagram"]}>
                <a target='_blank' href='https://www.ldp.org.tr/'>
                  {" "}
                  <i className='fab fa-instagram '></i>
                </a>
              </li>
              <li className={styles["icon-twitter"]}>
                <a target='_blank' href='https://www.ldp.org.tr/'>
                  {" "}
                  <i className={styles["fab fa-twitter"]}></i>
                </a>
              </li>
              <li className={styles["icon-linkedin"]}>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/hasan-bala/'>
                  {" "}
                  <i className={styles["fab fa-linkedin"]}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["f-contact"]}>
            <h2>İLETİŞİM</h2>
            <hr className={styles["footer-hr"]} />
            <li>
              <span className='fa fa-phone'></span>
              <a href='tel:(+90) 444 44 44'>+90 444 44 44 </a>
            </li>
            <li>
              <span className='fa fa-envelope'></span>
              <a href='mailto:abkaluminyum@gmail.com'>abkaluminyum@gmail.com</a>
            </li>
          </div>
        </div>
      </div>
      <hr className={styles["footer-hr2"]} />
      <div className={styles["footer-bottom"]}>
        © Copyright 2022 | ABK Alüminyum - Tüm Hakları Saklıdır
      </div>
    </div>
  );
};

export default Footer;
