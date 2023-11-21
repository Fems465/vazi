import Header from "../components/Header";

const HeroSection = ({
  title,
  title2,
  cspan,
  titlesize = "text-5xl lg:text-[6.2rem]",
}) => {
  return (
    <div className="w-full h-[24rem] lg:h-[615px]  relative overflow-clip">
      <Header />
      <div className="">
        <svg
          className="absolute  -z-10 lg:hidden"
          viewBox="0 0 360 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 293.71V0H360V293.71C326.632 301.14 244.38 316 182.315 316C120.25 316 34.9114 301.14 0 293.71Z"
            fill="url(#paint0_linear_52_235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_52_235"
              x1="180"
              y1="-53"
              x2="180"
              y2="411.216"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A9C6" />
              <stop offset="1" stopColor="#00788C" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute w-full h-auto -z-10 hidden lg:block"
          viewBox="0 0 1440 581"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 549.634V0H1440V549.634C1306.53 560.089 977.518 581 729.26 581C481.001 581 139.645 560.089 0 549.634Z"
            fill="url(#paint0_linear_734_1666)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_734_1666"
              x1="720"
              y1="-72.2275"
              x2="720"
              y2="581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A9C6" />
              <stop offset="1" stopColor="#0094AD" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hidden lg:block">
        <div className="-top-[3rem] absolute inset-x-0">
          <img
            src="/lines-hero.svg"
            alt=""
            className="w-full opacity-70 mx-auto"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="inset-y-[26rem] absolute inset-x-0 animate-pulse">
          <img
            src="/lines-hero1.svg"
            alt=""
            className="w-full opacity-70 mx-auto "
          />
        </div>
      </div>

      <section className="relative pt-36 lg:pt-48">
        <div className="container">
          <div className="text-center max-w-xs  lg:max-w-4xl  mx-auto">
            <h1
              className={` ${titlesize} text-hero font-hero gradient-hero text-white font-medium`}
            >
              {title}{" "}
              <span className="gradient-hero-span font-semibold text-outline">
                {cspan}
              </span>
              {title2}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
