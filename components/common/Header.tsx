import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";
import Image from "next/image";

interface Props {
  rightElements?: React.ReactElement[];
}

const Header = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href={`/`} className={styles.box}>
          <Image
            src="/inflearn.png"
            width={110}
            height={20}
            alt="로고"
            priority
          />
        </Link>
      </div>
      <div className={styles.flexItem}>
        {rightElements && (
          <div className={styles.flexItem}>{rightElements}</div>
        )}
      </div>
    </header>
  );
};

export default Header;