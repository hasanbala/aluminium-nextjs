import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ImageGallery from "react-image-gallery";

const Home = () => {
  // const images = data.photos.map((url) => ({ original: url }));
  const images = fetch("/slider").then((img) => console.log(img));

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        {/* <section className={styles.slider}>
        <div className={styles["slider-main"]}>
          <div className={styles["slide s--active"]}>
            <div className={styles["slide-inner"]} />
          </div>
          <div className={styles.slide}>
            <div className={styles["slide-inner"]} />
          </div>
          <div className={styles.slide}>
            <div className={styles["slide-inner"]} />
          </div>
          <div className={styles.slide}>
            <div className={styles["slide-inner"]} />
          </div>
          <div className={styles["slide s--prev"]}>
            <div className={styles["slide-inner"]} />
          </div>
        </div>
        <div className={styles["slider-control"]}>
          <div className={styles["slider-control-line"]} />
          <div className={styles["slider-control-line"]} />
        </div>
        <div
          className={styles["slider-control slider-control--right m--right"]}>
          <div className={styles["slider-control-line"]} />
          <div className={styles["slider-control-line"]} />
        </div>
      </section> */}

        <section>{/* <ImageGallery items={images} /> */}</section>

        <article className={styles.band} id='band'>
          <div className={styles["band-text"]}>
            <h2>ANASAYFA</h2>
            <hr className={styles["main-hr"]} />
            <br />
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
        </article>
      </main>
    </div>
  );
};

export default Home;
