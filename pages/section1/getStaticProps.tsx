import { NextPage } from "next";

interface Props {
  data: number;
}
const Example: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </div>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
    // ISR을 만들기 위함 5초마다 다시 함수를 실행해서 값이 다르면 다시 렌더링
    revalidate: 5,
  };
}
