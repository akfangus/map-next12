import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Links() {
  //useRouter로 next/Link를 대체할 수 있음
  // Link로 CSR처럼 동작하게할 수 있음
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    router.prefetch(`/section1/getStaticProps`);
  }, [router]);
  return (
    <main>
      <h1>Links</h1>
      {/* <Link href={`/section1/getStaticProps`}>getStaticProps</Link> */}
      <button
        onClick={() => {
          router.push(`/section1/getStaticProps`);
        }}
      >
        getStaticProps
      </button>
    </main>
  );
}
