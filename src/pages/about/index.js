import { fetchProducts } from "@components/fetchProducts";
import Head from "next/head";
import styles from "@styles/about.module.scss";

const About = ({ data }) => {
  return (
    <div>
      <Head>
        <title>ABK Alüminyum | Hakkımızda</title>
      </Head>
      <main>
        <section className={styles["about-us"]}>
          <h2>HAKKIMIZDA</h2>
          <hr className='main-hr' />
          <section className={styles["about-text"]}>
            <img className={styles.img2} src={data[0].download_url} alt='img' />
            <p>
              ABK Alüminyum, dinamik ve gelişme odaklı yapısıyla alüminyum
              korkuluk sektörünün en genç ve en dinamik firmalarındandır.
            </p>
            <p>
              Alüminyum korkuluk sektöründeki ihtiyaç ve sorunları iyi analiz
              eden ve bu doğrultuda üretimden teslimata kadar titiz bir çalışma
              gayreti gösteren firmamız profesyonel yönetim ve pazarlama
              anlayışıyla kusursuz iletişim ve uzun soluklu çalışma sistemini
              benimsemiş bu doğrultuda yapılanmıştır.
            </p>
            <p>
              Gerek üretim anlayışı gerek ürüne bakış açısıyla farklılığını
              hissettiren ABK Alüminyum en iyi ürün ve sürekli yenilik
              prensibiyle ürün çeşitini artırmaya yönelik yatırımlarına
              aralıksız devam etmektedir. Anadolu merkezli olan ABK Alüminyum,
              tüm Türkiye'de bayilik çalışmalarını sürdürmektedir.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const trump = context.resolvedUrl.split("/")[1];
    const data = await fetchProducts(trump);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default About;
