import { useState } from 'react';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import styles from '../../styles/detail.module.scss';
import useSWR from 'swr';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

const DetailSection = () => {
    const { data: currentStore } = useSWR<StoreProject.Store>(CURRENT_STORE_KEY);
    const [expended, setExpended] = useState(false);
    return (
        <div
            className={`${styles.detailSection} ${expended ? styles.expanded : ''} ${
                currentStore ? styles.selected : ''
            } `}
        >
            <DetailHeader
                currentStore={currentStore}
                expended={expended}
                onClickArrow={() => {
                    setExpended(!expended);
                }}
            />

            <DetailContent currentStore={currentStore} expanded={expended} />
        </div>
    );
};

export default DetailSection;
