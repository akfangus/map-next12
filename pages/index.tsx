import { Inter } from "@next/font/google";
import { Fragment, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import Header from "../components/common/Header";
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons/ai";
import MapSection from "../components/home/MapSection";
import useStores from "../hooks/useStores";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  stores: StoreProject.Store[];
}

export default function Home({ stores }: Props) {
  //getStaticProps로 stores.json을 불러와 해당 컴포넌트 로딩시 prop으로 전달.
  console.log(stores);
  const { initializeStore } = useStores();

  //새로운 매장 데이터가 들어왔을때 그 데이터로 전역 상태를 업데이트
  useEffect(() => {
    initializeStore(stores);
  }, [initializeStore, stores]);
  return (
    <>
      <Fragment>
        <Header
          rightElements={[
            <button
              onClick={() => alert("clcick복사")}
              className={styles.box}
              style={{ marginRight: "10px" }}
              key={"button"}
            >
              <AiOutlineShareAlt size={20} />
            </button>,

            <Link href={"/feedback"} className={styles.box} key={"feedback"}>
              <VscFeedback size={20} />
            </Link>,
          ]}
        />
        <main style={{ width: "100%", height: "100%" }}>
          <MapSection />
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
