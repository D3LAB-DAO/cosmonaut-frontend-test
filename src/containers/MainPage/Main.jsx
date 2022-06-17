import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import About from "../../components/main/About";
import Intro from "../../components/main/Intro";
import Learn from "../../components/main/Learn";
import Made from "../../components/main/Made";
import Special from "../../components/main/Special";

function Main() {
  return (
    <>
      <Helmet>
        <title>Cosmonaut for Cosmwasm Developer</title>
      </Helmet>
      <Navbar />
      <Intro />
      <About />
      <Learn />
      <Special />
      <Made />
      <Footer />
    </>
  );
}

export default Main;
