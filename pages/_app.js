import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import { ToastContainer, toast } from "react-toastify";

import Layout from "../components/Layout";
import nprogress from "nprogress";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    nprogress.done();
    toast("Connection failed.");
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
