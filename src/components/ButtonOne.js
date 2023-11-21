import React from "react";
import Link from "next/link";

const ButtonOne = ({ href, buttontext }) => {
  return (
    <Link
      href={"/"}
      className="border border-[#e9ca871f] bg-gradient-to-r from-[#e9ca87] via-[#bd9540] to-[#003840] hover:from-[#0037402d] hover:to-[#5bcedf5b] px-[6.5rem] lg:px-[9rem] py-2 rounded-full text-xs text-white font-semibold"
    >
      {buttontext}
    </Link>
  );
};

export default ButtonOne;
