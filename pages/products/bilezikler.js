import Head from "next/head";
import ProductsNav from "../../components/ProductsNav";
import Image from "next/image";
import getTable from "../../components/Table";

const Bilezikler = ({ bilezik }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Bilezikler</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Bilezikler</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {bilezik.map((data, index) => (
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
  const bilezik = data.filter((item) => item.Status === "Bilezik");
  return {
    props: {
      bilezik,
    },
    revalidate: 6000,
  };
}

export default Bilezikler;
