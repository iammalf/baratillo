import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <link rel="icon" href="/images/logo-baratillo.ico" />
        <meta
          name="google-site-verification"
          content="5mb3KrEu60-E4xQomIlzqkT53zCiAzcqCWkp6qZbzTQ"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Baratillo Cusco Online - Página de Compra y Venta",
  description:
    "Bienvenidos a Baratillo Cusco Online. Sitio web de compra y venta en General",
};
