import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Bilezikler = ({ bilezik }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Bilezikler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={bilezik} caption={"Bilezikler"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const bilezik = data.filter((item) => item.Status === "Bilezik");
  return {
    props: {
      bilezik,
    },
    revalidate: 6000,
  };
}

export default Bilezikler;
