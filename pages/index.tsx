import { Inter } from "@next/font/google";
import { Fragment, useEffect } from "react";
import Header from "../components/home/Header";
import MapSection from "../components/home/MapSection";
import useStores from "../hooks/useStores";
import DetailSection from "../components/home/DetailSection";
import Head from "next/head";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  stores: StoreProject.Store[];
}

export default function Home({ stores }: Props) {
  //getStaticProps로 stores.json을 불러와 해당 컴포넌트 로딩시 prop으로 전달.
  const { initializeStore } = useStores();

  //새로운 매장 데이터가 들어왔을때 그 데이터로 전역 상태를 업데이트
  useEffect(() => {
    initializeStore(stores);
  }, [initializeStore, stores]);
  return (
    <>
      <NextSeo title="메인페이지" description="apdls" />
      <Fragment>
        <Header />

        <main
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <MapSection />
          <DetailSection />
        </main>
      </Fragment>
    </>
  );
}

export async function getStaticProps() {
  // nexp api routes로 불러오기
  const stores = (await import("../public/stores.json")).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
