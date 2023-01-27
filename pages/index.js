import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostData } from "../lib/post";

const inter = Inter({ subsets: ["latin"] });

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>next.jsで作成したJamstackブログ</p>
        <h2>✍tktkのブログ</h2>
      </section>
      <section></section>
      <div className={styles.grid}>
        {/* 1つ１つのブログをdivで生成してgrid適用させる */}
        {allPostsData.map(({ id, date, title, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img
                src={`${thumbnail}`}
                className={`${styles.thumbnailImage}`}
              />
            </Link>
            <Link href={`/posts/${id}`}>
              <p className={utilStyles.boldText}>{title}</p>
            </Link>

            <br />

            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </article>
        ))}
      </div>
    </Layout>
  );
}
