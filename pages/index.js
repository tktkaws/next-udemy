import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>next.jsで作成したJamstackブログ</p>
        <h2>✍tktkのブログ</h2>
      </section>
      <section></section>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <p className={utilStyles.boldText}>first post</p>
          </Link>
          <br />
          <small className={utilStyles.lightText}>January 25</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <p className={utilStyles.boldText}>first post</p>
          </Link>
          <br />
          <small className={utilStyles.lightText}>January 25</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <p className={utilStyles.boldText}>first post</p>
          </Link>
          <br />
          <small className={utilStyles.lightText}>January 25</small>
        </article>
        <article>
          <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
          </Link>
          <Link href="/">
            <p className={utilStyles.boldText}>first post</p>
          </Link>
          <br />
          <small className={utilStyles.lightText}>January 25</small>
        </article>
      </div>
    </Layout>
  );
}
