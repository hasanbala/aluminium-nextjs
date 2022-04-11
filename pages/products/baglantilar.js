import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Baglantilar = ({ baglanti }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Bağlantılar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={baglanti} caption={"Bağlantılar"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const baglanti = data.filter((item) => item.Status === "Baglanti");
  return {
    props: {
      baglanti,
    },
    revalidate: 6000,
  };
}

export default Baglantilar;
