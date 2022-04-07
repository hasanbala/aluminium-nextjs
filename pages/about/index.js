import Head from "next/head";

const About = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>;
    </div>
  );
};

export default About;
