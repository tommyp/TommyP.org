import React from "react";
import Head from "next/head";
import Header from "../components/header";
import P from "../components/p";

function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Tommy Palmer | A Software Engineer living in London</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="container mx-auto w-4/6 font-sans">
        <P>
          I’m Tommy Palmer, a Software Engineer living in London and working at{" "}
          <a
            href="https://deliveroo.co.uk/"
            className="border-b-4 border-solid border-teal-400 text-gray-800 hover:text-teal-400"
          >
            Deliveroo
          </a>
          .
        </P>
      </section>
    </React.Fragment>
  );
}

export default Index;
