import { connect } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
const GetId = ({ datax }) => {
  // const router = useRouter();
  // console.log(router.query);
  console.log(datax);
  return (
    <div>
      <Head>
        <title>ID</title>
      </Head>
      <h1>get ID</h1>;
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const { data } = context;

    return {
      props: { datax: data }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default GetId;
