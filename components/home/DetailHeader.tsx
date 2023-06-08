import React from 'react';
import styles from '../../styles/detail.module.scss';
import Headerstyles from '../../styles/Header.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import copy from 'copy-to-clipboard';
import { AiOutlineShareAlt } from 'react-icons/ai';

interface Props {
    currentStore?: StoreProject.Store;
    expended: boolean;
    onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expended, onClickArrow }: Props) => {
    return (
        <div className={styles.header}>
            <button
                className={`${styles.arrowButton} ${expended ? styles.expanded : ''}`}
                onClick={onClickArrow}
                disabled={!currentStore}
                aria-label={expended ? '접기' : '펼치기'}
            >
                <IoIosArrowUp size={20} color="#666666" />
            </button>
            {!currentStore && <p className={styles.title}>매장을 선택해주세요!</p>}
            {currentStore && (
                <div className={styles.flexRow}>
                    <p className={styles.title}>{currentStore.name}</p>
                    <button
                        className={Headerstyles.box}
                        onClick={() => {
                            copy(location.origin + '/' + currentStore.name);
                        }}
                        aria-label="링크 복사"
                    >
                        <AiOutlineShareAlt size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default DetailHeader;
