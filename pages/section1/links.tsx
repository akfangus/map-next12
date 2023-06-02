import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Links() {
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
