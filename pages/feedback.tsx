import { Fragment } from "react";
import Header from "../components/common/Header";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Head from "next/head";

const feedBack = () => {
  return (
    <>
      <Head>
        <title>feedback</title>
        <meta name="description" content="피드백 페이지입니다." />
      </Head>
      <Fragment>
        <Header />
        <main></main>
      </Fragment>
    </>
  );
};

export default feedBack;
