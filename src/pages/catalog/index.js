import Head from "next/head";
import styles from "@styles/catalog.module.scss";

const Catalog = () => {
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

export default Catalog;
