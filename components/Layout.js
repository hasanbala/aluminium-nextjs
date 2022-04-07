// import styles from "../styles/Header.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name='og:title' content='ABK Alüminyum' />
        <meta charset='UTF-8' />
        <title>ABK Alüminyum</title>
        <meta name='author' content='Blaaool' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='Alüminyum Korkuluk Aksesuarları, Alüminyum Sistemleri, Alüminyum Küpeşte, Alüminyum Profiller, 
        Küpeşte, Alüminyum Mafsallar, Alüminyum Flanşlar, Alüminyum Tapalar, Alüminyum Pleksi Korkuluklar, 
        Alüminyum Bilezikler, Alüminyum Korkuluk, Alüminyum Cam Sistemleri'
        />
        <meta
          name='description'
          content="ABK Alüminyum, alüminyum sektöründe ve alüminyum korkuluk sistemlerinde Türkiye'nin öncü 
        genç ve dinamik firması olmaktan gurur duymaktadır."
        />

        <link
          rel='icon'
          type='image/png'
          href='/public/favicon/logox.png'
          sizes='32x32'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
        />
      </Head>

      <Header />

      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
