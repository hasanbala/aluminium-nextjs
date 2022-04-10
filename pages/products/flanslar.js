import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import getTable from "../../components/Table";

const Flanslar = ({ flans }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Flanşlar</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Flanşlar</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {flans.map((data, index) => (
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
  const flans = data.filter((item) => item.Status === "Flans");
  return {
    props: {
      flans,
    },
    revalidate: 6000,
  };
}

export default Flanslar;
