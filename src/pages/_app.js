import Layout from "@components/layout";
import "@styles/global.scss";
import "@styles/notfound.scss";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
