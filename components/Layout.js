import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {/* <Header /> */}
      <Header />

      {/* children_wraps content */}

      {children}

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Let Go Records",
  description:
    "Let Go Records specialises in Music Production, ghost production.",
  keywords: "Ghost Production, Music Services, Music consultancy.",
};
