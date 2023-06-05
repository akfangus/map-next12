import { Inter } from "@next/font/google";
import { Fragment } from "react";
import styles from "../styles/Header.module.scss";
import Header from "../components/common/Header";
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons/ai";
import MapSection from "../components/home/MapSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
