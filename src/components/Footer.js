import Link from "next/link";
import Image from "next/image";
import ButtonOne from "./ButtonOne";

export default function Footer() {
  return (
    <>
      <footer className="py-24 bg-[#003840]  relative">
        <div className="container ">
          <div className="text-center  max-w-[366px]  mx-auto mb-10">
            <h1 className="text-[1.3rem] lg:text-3xl text-white font-bold">
              Start leading with Vazi
            </h1>
            <p className="w-2/3 lg:w-auto mx-auto font-medium text-[10px] lg:text-xs text-[#A4B1B2] mt-1 mb-6 ">
              Let us know the needs of your business, and we will pinpoint the
              best-suited solution to fulfill them.
            </p>

            <ButtonOne href="/custom-link" buttontext="Contact Us" />
          </div>

          <div className=" w-[70%]  mx-auto">
            <hr className="border-t border-neutral-400" />
            <div className="flex flex-col lg:flex-row gap-y-2 justify-between mt-1 lg:mt-6">
              <div className="grid grid-flow-col gap-2 items-center ">
                <img src="/logo.png" className="w-8 hidden lg:block" />
                <p className=" text-sub text-[8px] lg:text-sm">
                  Copyright 2022 Vazi Legal Business Attorneys. All Rights
                  Reserved.
                </p>
              </div>
              <div className=" inline-flex gap-4 items-center">
                <a href="">
                  <img src="/linkedin.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/twitter.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/facebook.svg" className="w-3 lg:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 ">
          <div className="inset-y-[22rem] absolute inset-x-0">
            <img
              src="/lines-footer.svg"
              alt=""
              className="max-w-[80%] opacity-50 hover:opacity-80 duration-700  mx-auto"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
