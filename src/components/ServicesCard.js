import React from "react";
import Link from "next/link";

const ServicesCard = ({ title, description, linkText, linkHref, iconSrc }) => {
  return (
    <div className=" flex flex-col border border-[#ede6d4] rounded-xl gradient-card2 text-left w-[22rem] h-[25rem] pl-7 pr-12 py-6">
      <div className="flex mt-4 items-center gap-4">
        <img src={iconSrc} alt="Card Icon" />
        <h2 className="w-36 leading-6 tracking-tight lg:leading-6 text-[1.25rem] lg:text-[1.3rem] font-extrabold gradient-text2">
          {title}
        </h2>
      </div>
      <div className="mt-6">
        <p className="text-sm lg:text-[0.9rem] lg:leading-5 text-[#6F898C]">
          {description}
        </p>
      </div>
      <div className=" mt-auto">
        <Link
          href={linkHref || "/"}
          className=" text-left border-[#e9ca871f] bg-gradient-to-r from-[rgba(254,178,1,0.5)] to-[#EDECE9] hover:from-[#0037402d] hover:to-[#5bcedf5b] px-4 pr-[15.7rem] py-1.5 rounded-md text-xs text-white font-base"
        >
          {linkText || "More"}
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
