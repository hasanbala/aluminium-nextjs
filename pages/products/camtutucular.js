import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import getTable from "../../components/Table";
import ProductsSub from "../../components/ProductsSub";

const Camtutucular = ({ cam }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Cam Tutucular</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <ProductsSub post={cam} caption={"Cam Tutucular"} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getTable("Products");
  const cam = data.filter((item) => item.Status === "Cam");
  return {
    props: {
      cam,
    },
    revalidate: 6000,
  };
}

export default Camtutucular;
