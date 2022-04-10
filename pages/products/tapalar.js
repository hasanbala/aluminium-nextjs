import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import getTable from "../../components/Table";

const Tapalar = ({ tapa }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Tapalar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Tapalar</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {tapa.map((data, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
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
  const tapa = data.filter((item) => item.Status === "Tapa");
  return {
    props: {
      tapa,
    },
    revalidate: 6000,
  };
}

export default Tapalar;
