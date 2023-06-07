import { Fragment } from "react";
import Header from "../components/common/Header";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";

const feedBack = () => {
  return (
    <>
      <NextSeo title="피드백" description="피드백 페이지" />
      <Fragment>
        <Header />
        <main></main>
      </Fragment>
    </>
  );
};

export default feedBack;
