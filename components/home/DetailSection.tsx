import { useState } from "react";
import { CURRENT_STORE_KEY } from "../../hooks/useCurrentStore";
import styles from "../../styles/detail.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import useSWR from "swr";

const DetailSection = () => {
  const { data: currentStore } = useSWR<StoreProject.Store>(CURRENT_STORE_KEY);
  const [expended, setExpended] = useState(false);
  return (
    <div
      className={`${styles.detailSection} ${expended ? styles.expanded : ""} ${
        currentStore ? styles.selected : ""
      } `}
    >
      <div className={styles.header}>
        <button
          className={`${styles.arrowButton} ${expended ? styles.expanded : ""}`}
          onClick={() => setExpended(!expended)}
          disabled={!currentStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && <p className={styles.title}>매장을 선택해주세요!</p>}
        {currentStore && <p className={styles.title}>{currentStore.name}</p>}
      </div>
    </div>
  );
};

export default DetailSection;
