import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import getTable from "../../components/Table";

const Profiller = ({ profiller }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Profiller</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Profiller</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {profiller.map((data, index) => (
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
  const profiller = data.filter((item) => item.Status === "Profiller");
  return {
    props: {
      profiller,
    },
    revalidate: 6000,
  };
}

export default Profiller;
