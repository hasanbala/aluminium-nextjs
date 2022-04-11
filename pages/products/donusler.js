import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import ProductsSub from "../../components/ProductsSub";
import getTable from "../../components/Table";

const Donusler = ({ donus }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Dönüşler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={donus} caption={"Dönüşler"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const donus = data.filter((item) => item.Status === "Donus");
  return {
    props: {
      donus,
    },
    revalidate: 6000,
  };
}

export default Donusler;
