import ImageGallery from "react-image-gallery";
import styles from "@styles/home.module.scss";
import Head from "next/head";

const Home = ({ data }) => {
  const images = data.map((url) => ({ original: url.download_url }));

  return (
    <div>
      <Head>
        <title>ABK Alüminyum</title>
      </Head>
      <main>
        <div>
          <ImageGallery
            items={images}
            lazyLoad={true}
            showFullscreenButton={false}
          />
        </div>

        <main className={styles.band} id='band'>
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
        </main>
      </main>
    </div>
  );
};

const baseEndPointUrl = `${process.env.RAW_GITHUB_API}/slider`;

export async function getServerSideProps(context) {
  try {
    const response = await fetch(baseEndPointUrl);
    const data = await response.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Home;
