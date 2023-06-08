import { useCallback } from 'react';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

const useStores = () => {
    //useCallback으로 메모이제이션 사용
    //STORE_KEY에 stores.json의 데이터가 전역으로 저장
    const initializeStore = useCallback((stores: StoreProject.Store[]) => {
        mutate(STORE_KEY, stores);
    }, []);

    return {
        initializeStore,
    };
};

export default useStores;
