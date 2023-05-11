import Head from "next/head";

interface PageHeadProps {
  pageTitle: string;
}

export default function PageHead({ pageTitle }: PageHeadProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
