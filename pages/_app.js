import Layout from "@/components/layout";
import "@/styles/global.scss";
import "@/styles/notfound.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
