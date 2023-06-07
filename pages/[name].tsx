import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import DetailHeader from "../components/home/DetailHeader";
import DetailContent from "../components/home/DetailContent";
import styles from "../styles/detail.module.scss";
import { useRouter } from "next/router";
import useCurrentStore from "../hooks/useCurrentStore";

interface Props {
  store: StoreProject.Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();
  const expanded = true;

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
    /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`);
  };

  return (
    <>
      <Head>
        <title>상세 : {store.name}</title>
        <meta name="description" content={store.description} />
      </Head>
      <div className={`${styles.detailSection2} ${styles.expanded}`}>
        <DetailHeader
          currentStore={store}
          expended={expanded}
          onClickArrow={goToMap}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;

//getStaticPaths는 항상 getStaticProps와 함께 사용되어야 함.
export const getStaticPaths: GetStaticPaths = async () => {
  //미리 모든 매장의 정보를 만들어준다
  const stores = (await import("../public/stores.json")).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //getStaticPaths에서 만들어준 params를 받아서 해당 매장의 정보를 가져온다.
  const stores = (await import("../public/stores.json")).default;
  const store = stores.find((store) => store.name === params?.name);
  return {
    props: { store },
  };
};
