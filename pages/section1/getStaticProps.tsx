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
    revalidate: 5,
  };
}
