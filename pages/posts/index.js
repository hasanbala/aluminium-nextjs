import Head from "next/head";
const PostHome = () => {
  return (
    <div>
      <Head>
        <title>PostHome</title>
      </Head>
      <h1>PostHome</h1>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const data = context.params;
//   return {
//     props: { data: data.json() }, // will be passed to the page component as props
//   };
// }

export default PostHome;
