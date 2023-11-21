import React from "react";

const AboutCard = ({ iconSrc, title, content }) => {
  return (
    <div className="w-[17rem] lg:w-auto mx-auto lg:mx-0 p-8 border gradient-card rounded-lg">
      <div className="flex items-center gap-4">
        {iconSrc && <img src={iconSrc} alt="Icon" />}
        <h2 className="w-36 leading-6 tracking-tight lg:leading-6 text-[1.25rem] lg:text-[1.3rem] font-bold gradient-text2">
          {title}
        </h2>
      </div>
      <div className="mt-8">
        <p className="w-48 text-sm lg:text-base lg:leading-5 text-[#7A7A7A]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
