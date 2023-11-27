"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ButtonOne = ({ href, buttontext }) => {
  const linkVariants = {
    hover: {
      backgroundImage: [
        "linear-gradient(to right, #e9ca87, #bd9540, #003840)",
        "linear-gradient(to right, #0037402d, #5bcedf5b)",
      ],
    },
    transition: { duration: 1.5 },
  };

  return (
    <Link href={"/contact-us"}>
      <motion.span
        variants={linkVariants}
        whileHover="hover"
        className="bg-gradient-to-r from-[#e9ca87] via-[#bd9540] to-[#003840] px-[6.5rem] lg:px-[9rem] py-2 rounded-full text-xs text-white font-semibold"
      >
        {buttontext}
      </motion.span>
    </Link>
  );
};

export default ButtonOne;
