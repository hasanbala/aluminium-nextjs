import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Pleksi = ({ pleksi }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Pleksi</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={pleksi} caption={"Pleksi"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const pleksi = data.filter((item) => item.Status === "Pleksi");
  return {
    props: {
      pleksi,
    },
    revalidate: 6000,
  };
}

export default Pleksi;
