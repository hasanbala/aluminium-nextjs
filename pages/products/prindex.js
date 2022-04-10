import Head from "next/head";
import Image from "next/image";
import getTable from "../../components/Table";
import ProductsNav from "../../components/ProductsNav";

const ProductsIndex = ({ mafsal }) => {
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
              {mafsal.map((data, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
                    {/* <img
                      //   className='lazy-image'
                      width='300'
                      height='280'
                      src={data.Attachments[0].url}
                      alt={data.Name}
                    /> */}
                    <Image
                      src={data.Attachments[0].url}
                      height={300}
                      width={400}
                      alt={data.Name}
                    />
                  </div>
                  <div className='column-heading'> {data.Name} </div>
                  <div className='column-subheading' />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const mafsal = data.filter((item) => item.Status === "Mafsal");
  //     const pleksi = data.filter((item) => item.Status === "Pleksi");
  //     const tapa = data.filter((item) => item.Status === "Tapa");
  //     const flans = data.filter((item) => item.Status === "Flans");
  //     const profiller = data.filter((item) => item.Status === "Profiller");
  //     const donus = data.filter((item) => item.Status === "Donus");
  //     const cam = data.filter((item) => item.Status === "Cam");
  //     const bilezik = data.filter((item) => item.Status === "Bilezik");
  //   const baglanti = data.filter((item) => item.Status === "Baglanti");
  return {
    props: {
      mafsal,
    },
    revalidate: 6000,
  };
}

export default ProductsIndex;
