import React from "react";
import Home from "./Home";
import Details from "./Details";
import Save from "./Save";
import Count from "./Count";
import Registry from "./Registry";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Nav from "../../components/nav/Nav";

const All = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Details />
      <Save />
      <Count />
      <Registry />
      <Gallery />
      <Footer />
    </div>
  );
};

export default All;
