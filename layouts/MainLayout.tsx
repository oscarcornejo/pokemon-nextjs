import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";

type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Oscar Cornejo" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />

        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Estás viendo la página de ${title}`}
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};

export default MainLayout;
