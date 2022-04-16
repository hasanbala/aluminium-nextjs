// import { useState, useEffect } from "react";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import Head from "next/head";
// import getTable from "../../components/Table";
// import ProductsSub from "../../components/ProductsSub";

const ProductsIndex = ({ images }) => {
  // const [imageData, setImageData] = useState([]);

  // useEffect(() => {
  //   setImageData(images);
  // }, [setImageData]);

  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Ürünler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Mafsallar</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {images[0].map((item, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
                    <Image src={item[1]} height={300} width={400} />
                  </div>
                  <div className='column-heading'>
                    {item[0].replace(".jpg", "")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// export async function getStaticProps() {
//   const data = await getTable("Products");
//   const mafsal = data.filter((item) => item.Status === "Mafsal");
//   const pleksi = data.filter((item) => item.Status === "Pleksi");
//   const tapa = data.filter((item) => item.Status === "Tapa");
//   const flans = data.filter((item) => item.Status === "Flans");
//   const profiller = data.filter((item) => item.Status === "Profiller");
//   const donus = data.filter((item) => item.Status === "Donus");
//   const cam = data.filter((item) => item.Status === "Cam");
//   const bilezik = data.filter((item) => item.Status === "Bilezik");
//   const baglanti = data.filter((item) => item.Status === "Baglanti");
//   const mafsal = FetchProducts("mafsallar");
//   return {
//     props: {
//       mafsal,
//     },
//     // revalidate: 6000,
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
  const images = importAll(
    require.context(
      "../../public/propics/mafsallar",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return {
    props: {
      images,
    },
  };
}

export default ProductsIndex;
