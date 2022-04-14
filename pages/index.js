import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ImageGallery from "react-image-gallery";
// import getTable from "../components/Table";
import { useState, useEffect } from "react";

const Home = ({ data }) => {
  // const responseImages = data
  //   .map((trump) => trump.Attachments[0].url)
  //   .reverse();
  // const images = responseImages.map((url) => ({ original: url }));

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const importAll = (r) => {
      let images = {};
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item).default.src;
      });
      return Object.entries(images);
    };
    const images = importAll(
      require.context("../public/slider", false, /\.(png|jpe?g|svg)$/)
    );
    setImageData(images);
  }, [setImageData]);

  // console.log(imageData);
  const images = imageData.map((url) => ({ original: url[1] }));

  return (
    <div>
      <Head>
        <title>ABK Alüminyum</title>
      </Head>
      <main>
        <section>
          {/* <ImageGallery items={images} lazyLoad={true} /> */}
          <ImageGallery items={images} lazyLoad={true} />
        </section>

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

// export async function getStaticProps() {
//   const data = await getTable("Slider");
//   return {
//     props: {
//       data,
//     },
//     revalidate: 6000,
//   };
// }

export default Home;
