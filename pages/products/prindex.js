import Head from "next/head";
import getTable from "../../components/Table";
import ProductsNav from "../../components/ProductsNav";
import ProductsSub from "../../components/ProductsSub";

const ProductsIndex = ({ mafsal }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Ürünler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={mafsal} caption={"Mafsallar"} />
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
