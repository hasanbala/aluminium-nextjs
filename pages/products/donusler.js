import { useState, useEffect } from "react";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import Head from "next/head";
// import ProductsSub from "../../components/ProductsSub";
// import getTable from "../../components/Table";

const Donusler = () => {
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
      require.context(
        "../../public/propics/donusler",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    setImageData(images);
  }, [setImageData]);

  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Dönüşler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          {/* <ProductsSub post={donus} caption={"Dönüşler"} /> */}
          <div className='products-sub'>
            <h2>Dönüşler</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {imageData.map((item, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
                    <Image
                      src={item[1]}
                      height={300}
                      width={400}
                      alt='Resim'
                      priority
                    />
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
//   const donus = data.filter((item) => item.Status === "Donus");
//   return {
//     props: {
//       donus,
//     },
//     revalidate: 6000,
//   };
// }

// export async function getStaticProps() {
//   const importAll = (r) => {
//     let images = {};
//     r.keys().map((item) => {
//       images[item.replace("./", "")] = r(item).default.src;
//     });
//     return [Object.entries(images)];
//   };
//   const images = importAll(
//     require.context(
//       "../../public/propics/donusler",
//       false,
//       /\.(png|jpe?g|svg)$/
//     )
//   );
//   return {
//     props: {
//       images,
//     },
//   };
// }

export default Donusler;
