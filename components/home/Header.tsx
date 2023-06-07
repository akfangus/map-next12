import React, { useCallback } from "react";
import Header from "../common/Header";
import Link from "next/link";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineShareAlt } from "react-icons/ai";
import styles from "../../styles/Header.module.scss";
import useMap from "../../hooks/useMap";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();
  const router = useRouter();

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);
  return (
    <Header
      onClickLogo={resetMapOptions}
      rightElements={[
        <button
          onClick={replaceAndCopyUrl}
          className={styles.box}
          style={{ marginRight: "10px" }}
          key={"button"}
          aria-label="현재위치 링크 복사"
        >
          <AiOutlineShareAlt size={20} />
        </button>,

        <Link
          href={"/feedback"}
          className={styles.box}
          key={"feedback"}
          aria-label="피드백"
        >
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  );
};

export default HomeHeader;
