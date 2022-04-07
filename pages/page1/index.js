import Head from "next/head";

const Page1 = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Page1</title>
      </Head>
      <h1>Page1</h1>;
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

export default Page1;
