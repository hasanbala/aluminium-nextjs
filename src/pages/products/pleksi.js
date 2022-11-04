import { fetchProducts } from "@components/fetchProducts";
import { ProductsNav } from "@components/productsNav";
import Head from "next/head";

const Pleksi = ({ data }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Pleksi</title>
      </Head>
      <main>
        <section className='products'>
          <ProductsNav />
          <div className='products-sub'>
            <h2>Pleksi</h2>
            <hr className='main-hr-products' />
            <div className='products-caption'>
              {data.map((item, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
                    <img
                      src={item.download_url}
                      height={280}
                      width={380}
                      alt='Abk Alüminyum'
                    />
                  </div>
                  <div className='column-heading'>
                    {item.name.replace(".jpg", "")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const trump = context.resolvedUrl.split("/")[2];
    const data = await fetchProducts(`products/${trump}`);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Pleksi;
