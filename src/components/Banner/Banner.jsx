import Image from "next/image";
import React from "react";
import Element from "../Element/Element";

const Banner = () => {
  return (
    <div className="banner">
      <Element />
      <Element className="mobile-hide" />
      <Element className="mobile-hide" />
    </div>
  );
};

export default Banner;
