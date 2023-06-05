import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href={`/`} className={styles.box}>
          <img src="/inflearn.png" width={110} height={20} alt="로고" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
