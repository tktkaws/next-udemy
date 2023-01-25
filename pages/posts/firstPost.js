import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>first post</title>
      </Head>
      <h1>first post</h1>
      <Link href="/">ホームへ戻る</Link>
    </div>
  );
}
