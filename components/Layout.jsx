import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <link rel="icon" href="/images/logo-baratillo.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Baratillo Cusco Online - Página de Compra y Venta",
  description:
    "Bienvenidos a Baratillo Cusco Online. Sitio web de compra y venta en General",
};
