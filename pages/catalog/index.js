import Head from "next/head";
import styles from "../../styles/Catalog.module.scss";

const Catalog = () => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Katalog</title>
      </Head>
      ,
      <main>
        <section className={styles["section-catalog"]}>
          <div className={styles["catalog-header"]}>
            <h2>KATALOG</h2>
            <hr className='main-hr' />
          </div>
          <div className={styles["catalog-main"]}>
            <a
              className={styles["catalog-main-attr"]}
              href='/catalogs/catalog-pdf.pdf'
              download>
              Online Katalog
            </a>
            <a
              className={styles["catalog-main-attr"]}
              href='/catalogs/price-list.xls'
              download>
              Fiyat Listesi
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Catalog;

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const ShowProducts = ({ post }) => {
//   const [imageData, setImageData] = useState([]);

//   useEffect(() => {
//     const importAll = (r) => {
//       // console.log(r.keys());
//       let images = {};
//       r.keys().map((item) => {
//         // console.log(r(item).default.src);
//         images[item.replace("./", "")] = r(item).default.src;
//       });
//       return images;
//     };
//     const images = importAll(
//       require.context("../../public/propics", false, /\.(png|jpe?g|svg)$/)
//     );
//     setImageData(Object.keys(images).map((key) => ({ [key]: images[key] })));
//     // setImageData(images);
//   }, []);

//   // const dataPic = Object.keys(images).map((key) => ({ [key]: images[key] }));
//   // console.log(imageData.map((a, b) => a - b));
//   console.log(imageData);

//   return (
//     <div className='products-caption'>
//       {/* <img src={imageData["ben.jpg"]} height={300} width={400} /> */}

//       {imageData.map((item, index) => (
//         <div className='column' key={index}>
//           <div className='column-images'>
//             {console.log(typeof index)}
//             <img src={item[`${index + 10}.jpg`]} height={300} width={400} />
//           </div>
//           <div className='column-heading'> </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ShowProducts;
