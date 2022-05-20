import { FetchProducts } from "@/components/fetchProducts";
import { ProductsNav } from "@/components/productsNav";
import Image from "next/image";
import Head from "next/head";

const Bilezikler = ({ data }) => {
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
              {data.map((item, index) => (
                <div className='column' key={index}>
                  <div className='column-images'>
                    <Image
                      src={item.download_url}
                      height={300}
                      width={400}
                      alt='Resim'
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
    const data = await FetchProducts(`${trump}`);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Bilezikler;
