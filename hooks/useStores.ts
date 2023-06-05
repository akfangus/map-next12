import { useCallback } from "react";
import { mutate } from "swr";

export const STORE_KEY = "/stores";

const useStores = () => {
  const initializeStore = useCallback((stores: StoreProject.Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);

  return {
    initializeStore,
  };
};

export default useStores;
