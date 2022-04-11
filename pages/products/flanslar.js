import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Flanslar = ({ flans }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Flanşlar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={flans} caption={"Flanşlar"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const flans = data.filter((item) => item.Status === "Flans");
  return {
    props: {
      flans,
    },
    revalidate: 6000,
  };
}

export default Flanslar;
