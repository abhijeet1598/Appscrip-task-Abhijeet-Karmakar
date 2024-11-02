import Image from "next/image";
import React from "react";

const Element = () => {
  return (
    <div className="element">
      <Image src={"/element-4.png"} alt={"element"} width={16} height={16} />
      <p>Lorem ipsum dolor</p>
    </div>
  );
};

export default Element;
