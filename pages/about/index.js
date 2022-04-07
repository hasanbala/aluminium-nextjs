import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <section>
          <section className={styles["about-us"]}>
            <h2>HAKKIMIZDA</h2>
            <hr className={styles["main-hr"]} />
            <section className={styles["about-text"]}>
              <img
                className={styles.img2}
                src='/images/ben.jpg'
                alt='HAKKIMIZDA'
              />
              <p>
                ABK Alüminyum, dinamik ve gelişme odaklı yapısıyla alüminyum
                korkuluk sektörünün en genç ve en dinamik firmalarındandır.
              </p>
              <p>
                Alüminyum korkuluk sektöründeki ihtiyaç ve sorunları iyi analiz
                eden ve bu doğrultuda üretimden teslimata kadar titiz bir
                çalışma gayreti gösteren firmamız profesyonel yönetim ve
                pazarlama anlayışıyla kusursuz iletişim ve uzun soluklu çalışma
                sistemini benimsemiş bu doğrultuda yapılanmıştır.
              </p>
              <p>
                Gerek üretim anlayışı gerek ürüne bakış açısıyla farklılığını
                hissettiren ABK Alüminyum en iyi ürün ve sürekli yenilik
                prensibiyle ürün çeşitini artırmaya yönelik yatırımlarına
                aralıksız devam etmektedir. Anadolu merkezli olan ABK Alüminyum,
                tüm Türkiye'de bayilik çalışmalarını sürdürmektedir.
              </p>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default About;
