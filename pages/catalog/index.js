import Head from "next/head";
import styles from "@/styles/catalog.module.scss";

const Catalog = () => {
  // console.log(props.data);
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Katalog</title>
      </Head>
      ,
      <main>
        <section className={styles["section-catalog"]}>
          <div className={styles["catalog-header"]}>
            <h2>KATALOG</h2>
            <hr className='main-hr' />
          </div>
          <div className={styles["catalog-main"]}>
            <a
              className={styles["catalog-main-attr"]}
              href='/catalogs/catalog-pdf.pdf'
              download>
              Online Katalog
            </a>
            <a
              className={styles["catalog-main-attr"]}
              href='/catalogs/price-list.xls'
              download>
              Fiyat Listesi
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const response = await fetch(
//     "https://api.github.com/repositories/493851314/contents/aluminium-nextjs/slider"
//   );
//   const data = await response.json();
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default Catalog;
