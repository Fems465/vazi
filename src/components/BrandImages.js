// BrandImages.js

import React from "react";

const BrandImages = ({ logos }) => (
  <>
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        className="w-[2rem] lg:w-[8rem]"
        alt={logo.alt}
      />
    ))}
  </>
);

export default BrandImages;
