import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
// import getTable from "../../components/Table";
// import ProductsSub from "../../components/ProductsSub";
import { useState, useEffect } from "react";
import Image from "next/image";

const Bilezikler = ({ bilezik }) => {
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
        "../../public/propics/bilezikler",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    setImageData(images);
  }, [setImageData]);

  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Bilezikler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          {/* <ProductsSub post={bilezik} caption={"Bilezikler"} /> */}{" "}
          <div className='products-sub'>
            <h2>Bilezikler</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {imageData.map((item, index) => (
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
//   const bilezik = data.filter((item) => item.Status === "Bilezik");
//   return {
//     props: {
//       bilezik,
//     },
//     revalidate: 6000,
//   };
// }

export default Bilezikler;
