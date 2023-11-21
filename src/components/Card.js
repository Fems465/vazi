// components/Card.js
import Link from "next/link";

const Card = ({ title, imageUrl, link }) => (
  <div className="w-[11rem] mx-auto lg:w-[195px] gradient-card rounded-2xl  pt-4 pb-4 text-left font-stark border">
    <div className="pl-4 pr-6">
      <img src={imageUrl} className="w-10 mb-4 mt-7" alt="Icon" />
      <h3 className=" leading-none tracking-tight lg:leading-tight text-[1.05rem] lg:text-[19px] font-bold   mb-5 gradient-text ">
        {title}
      </h3>
    </div>
    <div className="pl-3">
      <Link
        href={link}
        passHref
        className="text-xs  text-slate-400 bg-[#feb20111] rounded-lg hover:from-[#0037402d] hover:to-[#5bcedf5b] pl-2 pr-[6rem] lg:pr-[7.4rem] py-1.5"
      >
        More{" "}
        <svg
          className="inline-flex"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.41935C0.679318 4.41935 0.419355 4.67932 0.419355 5C0.419355 5.32068 0.679319 5.58065 1 5.58065L1 4.41935ZM9.15251 5.41058C9.37927 5.18382 9.37927 4.81618 9.15251 4.58942L5.45731 0.894219C5.23055 0.667462 4.86291 0.667462 4.63615 0.894219C4.4094 1.12097 4.4094 1.48862 4.63615 1.71537L7.92078 5L4.63616 8.28462C4.4094 8.51138 4.4094 8.87902 4.63616 9.10578C4.86291 9.33254 5.23056 9.33254 5.45731 9.10578L9.15251 5.41058ZM1 5.58065L8.74194 5.58064L8.74194 4.41935L1 4.41935L1 5.58065Z"
            fill="#93B0B6"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default Card;
