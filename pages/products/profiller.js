import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Profiller = ({ profiller }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Profiller</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={profiller} caption={"Profiller"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const profiller = data.filter((item) => item.Status === "Profiller");
  return {
    props: {
      profiller,
    },
    revalidate: 6000,
  };
}

export default Profiller;
