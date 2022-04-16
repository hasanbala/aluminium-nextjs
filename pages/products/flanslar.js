// import { useState, useEffect } from "react";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import Head from "next/head";
// import getTable from "../../components/Table";
// import ProductsSub from "../../components/ProductsSub";

const Flanslar = ({ images }) => {
  // const [imageData, setImageData] = useState([]);

  // useEffect(() => {
  //   setImageData(images);
  // }, [setImageData]);

  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Flanşlar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          {/* <ProductsSub post={flans} caption={"Flanşlar"} /> */}
          <div className='products-sub'>
            <h2>Flanşlar</h2>
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
//   const flans = data.filter((item) => item.Status === "Flans");
//   return {
//     props: {
//       flans,
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
  const images = importAll(
    require.context(
      "../../public/propics/flanslar",
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

export default Flanslar;
