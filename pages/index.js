// import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
// import getTable from "../components/Table";

const Home = ({ sliderImages }) => {
  // const [imageData, setImageData] = useState([]);

  // useEffect(() => {
  //   setImageData(sliderImages);
  // }, [setImageData]);

  // const images = imageData.map((url) => ({ original: url[1] }));
  const images = sliderImages[0].map((url) => ({ original: url[1] }));

  // const responseImages = data
  //   .map((trump) => trump.Attachments[0].url)
  //   .reverse();
  // const images = responseImages.map((url) => ({ original: url }));

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

export async function getStaticProps() {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item).default.src;
    });
    return [Object.entries(images)];
  };
  const sliderImages = importAll(
    require.context("../public/slider", false, /\.(png|jpe?g|svg)$/)
  );
  return {
    props: {
      sliderImages,
    },
  };
}

export default Home;
