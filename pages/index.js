import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className='main'>
        <h1 className='title'></h1>
        <h1 className='title'>
          Read{" "}
          <Link href='/first-post'>
            <a>this page!</a>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Home;
