import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Tapalar = ({ tapa }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Tapalar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={tapa} caption={"Tapalar"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const tapa = data.filter((item) => item.Status === "Tapa");
  return {
    props: {
      tapa,
    },
    revalidate: 6000,
  };
}

export default Tapalar;
