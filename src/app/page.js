"use client";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../components/HeroSection";
import Content from "../components/Content";

import CardCarousel from "../components/CardCarousel";

import brandData from "../components/data/brandData";

import { cards } from "../components/CardData.js";
import BrandImages from "@/components/BrandImages";
import featuredData from "@/components/data/featuredData";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroSection title="Powering Innovation with" cspan="legal expertise" />
      </div>

      <section className=" w-full text-center max-h-fit mt-[5%] align-middle ">
        <div className="container">
          <div className="flex items-center justify-center gap-2 lg:gap-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="370"
              height="2"
              viewBox="0 0 370 2"
              fill="none"
            >
              <path
                d="M0 1L370 1.00003"
                stroke="url(#paint0_linear_375_1845)"
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_375_1845"
                  x1="0"
                  y1="1"
                  x2="370"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D5D5D5" stopOpacity="0" />
                  <stop offset="1" stopColor="#3DABBE" />
                </linearGradient>
              </defs>
            </svg>
            <Fade left cascade>
              <h2 className="w-full lg:w-auto  text-lg lg:text-3xl text-basic leading-tight font-bold">
                Practice <span className="text-secondary">areas</span>
              </h2>
            </Fade>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="370"
              height="2"
              viewBox="0 0 370 2"
              fill="none"
            >
              <path
                d="M0 1L370 1.00003"
                stroke="url(#paint0_linear_375_1844)"
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_375_1844"
                  x1="0"
                  y1="1"
                  x2="375"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#37A9BD" />
                  <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="  mt-10 px-5 w-full md:w-[48rem] lg:w-[58rem] xl:w-[67rem] overflow-hidden lg:overflow-visible  mx-auto  items-center ">
            <CardCarousel cards={cards} />
          </div>
        </div>
      </section>

      <div className=" w-full  mt-24  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10"
          viewBox="0 0 1440 816 "
          fill="none"
        >
          <path
            d="M720.5 0C450.5 0 127.667 51.6667 0 77.5V813.5L1439.5 816V77.5C1312.33 51.6667 990.5 0 720.5 0Z"
            fill="url(#paint0_linear_653_1501)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_653_1501"
              x1="719.75"
              y1="-5.00188e-08"
              x2="719.75"
              y2="623"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#027D92" />
              <stop
                offset="0.642512"
                stopColor="#7AABB3"
                stopOpacity="0.484375"
              />
              <stop offset="1" stopColor="#AAD3DA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <section className="w-full text-center max-h-fit pt-[8%] xl:pt-[7%] align-middle">
          <div className="">
            <div className="container">
              <Fade big cascade>
                <div className="w-auto  text-small lg:max-w-4xl mx-auto text-center mb-8 lg:mb-24">
                  <span className="text-white  lg:text-3xl font-bold">
                    Vazi is the foremost tech law firm based in <br /> Nigeria
                    and the United States. We offer a personalised <br />
                    approach for{" "}
                  </span>

                  <span className="text-cyan-200 text-opacity-70  lg:text-3xl font-extrabold ">
                    venture capitalists, private equity firms and <br />
                    start-ups{" "}
                  </span>
                  <span className="text-white text-opacity-75  lg:text-3xl font-bold">
                    by advisory services best suited for our
                    <br />
                    clients’ business interests.
                  </span>
                </div>
              </Fade>
            </div>
          </div>

          <div>
            <Fade left cascade>
              <div className="flex items-center justify-center gap-2 lg:gap-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 lg:w-auto"
                  width="370"
                  height="2"
                  viewBox="0 0 370 2"
                  fill="none"
                >
                  <path
                    d="M0 1L370 1.00003"
                    stroke="url(#paint0_linear_375_1845)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_375_1845"
                      x1="0"
                      y1="1"
                      x2="370"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D5D5D5" stopOpacity="0" />
                      <stop offset="1" stopColor="#3DABBE" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="text-[7px]  w-auto lg:w-auto lg:text-xs text-primary leading-tight font-bold  uppercase tracking-[0.1rem] lg:tracking-[2.64px]">
                  Empowering industry leaders worldwide
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-16 lg:w-auto"
                  width="370"
                  height="2"
                  viewBox="0 0 370 2"
                  fill="none"
                >
                  <path
                    d="M0 1L370 1.00003"
                    stroke="url(#paint0_linear_375_1844)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_375_1844"
                      x1="0"
                      y1="1"
                      x2="375"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37A9BD" />
                      <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </Fade>
            <Fade right>
              <div className="px-[5%] py-4 max-w-[100%] mx-auto lg:my-6 flex gap-4 lg:gap-0 items-center justify-between  overflow-hidden">
                <Marquee speed={80} pauseOnHover={true} autoFill={true}>
                  <div className="pl-10 flex gap-x-12 xl:gap-x-16">
                    <BrandImages logos={brandData} />
                  </div>
                </Marquee>
              </div>
            </Fade>
            <div className="  flex justify-center items-center">
              <svg
                width="1440"
                height="2"
                viewBox="0 0 1440 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1L1440 0.999874"
                  stroke="url(#paint0_linear_375_1857)"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_1857"
                    x1="1440"
                    y1="1"
                    x2="0"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4E4E4" stopOpacity="0" />
                    <stop
                      offset="0.375"
                      stopColor="#36919E"
                      stopOpacity="0.6"
                    />
                    <stop
                      offset="0.630208"
                      stopColor="#027889"
                      stopOpacity="0.6"
                    />
                    <stop offset="1" stopColor="#E4E4E4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <section className="text-center pt-[6em] mb-28 align-middle">
          <Fade bottom>
            <Content
              title="Why industry leaders"
              stitle="trust us"
              subtitle1="As a tech firm fueled by innovation within the technology ecosystem. Our approach is simple -"
              content1="demystifying legal processes by proffering innovative and unique solutions to each client."
              subtitle2="We recognise the dynamic nature of the modern business landscape and are"
              content2="committed to evolving and adapting to changing realities."
              titleWidth="w-48 lg:w-[17rem]"
              textsize="text-2xl lg:text-3xl"
            />
          </Fade>
        </section>

        <section className="mb-36">
          <div>
            <div className="flex items-center justify-center lg:gap-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="370"
                height="2"
                viewBox="0 0 370 2"
                fill="none"
              >
                <path
                  d="M0 1L370 1.00003"
                  stroke="url(#paint0_linear_375_1845)"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_1845"
                    x1="0"
                    y1="1"
                    x2="370"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D5D5D5" stopOpacity="0" />
                    <stop offset="1" stopColor="#3DABBE" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-[7px]  text-center w-full lg:w-auto text-xs text-primary leading-tight font-bold  uppercase tracking-[2.64px]">
                FEATURED ON
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="370"
                height="2"
                viewBox="0 0 370 2"
                fill="none"
              >
                <path
                  d="M0 1L370 1.00003"
                  stroke="url(#paint0_linear_375_1844)"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_1844"
                    x1="0"
                    y1="1"
                    x2="375"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#37A9BD" />
                    <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Fade top>
              <div className="px-[10%] max-w-[100%] mx-auto flex mb-3 justify-center items-center gap-8 lg:gap-16 overflow-hidden">
                <Marquee speed={80} pauseOnHover={true} autoFill={true}>
                  <div className="flex gap-x-10 mr-5">
                    <BrandImages logos={featuredData} />
                  </div>
                </Marquee>
              </div>
            </Fade>
            <div className="  flex justify-center items-center">
              <svg
                className="w-[60%]"
                height="2"
                viewBox="0 0 1440 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1L1440 0.999874"
                  stroke="url(#paint0_linear_375_1857)"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_1857"
                    x1="1440"
                    y1="1"
                    x2="0"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4E4E4" stopOpacity="0" />
                    <stop
                      offset="0.375"
                      stopColor="#36919E"
                      stopOpacity="0.6"
                    />
                    <stop
                      offset="0.630208"
                      stopColor="#027889"
                      stopOpacity="0.6"
                    />
                    <stop offset="1" stopColor="#E4E4E4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
