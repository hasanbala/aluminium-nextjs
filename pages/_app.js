import Layout from "../components/Layout";
import "../styles/global.scss";
import "../styles/notfound.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
