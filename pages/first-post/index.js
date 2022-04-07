import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>FirstPost</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h1 className="title">
        <Link href="/">
          <a>sdds</a>
        </Link>
        <Image
          src="/images/king-chef.jpg"
          height={800}
          width={600}
          alt="Your Name"
        />
      </h1>
    </div>
  );
}
