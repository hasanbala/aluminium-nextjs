import Head from "next/head";
import { useRouter } from "next/router";
const GetId = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <Head>
        <title>ID</title>
      </Head>
      <h1>get ID</h1>;
    </div>
  );
};

export default GetId;
