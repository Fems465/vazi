import Header from "../components/Header";

const HeroSection = ({
  title,
  title2,
  cspan,
  titlesize = "text-5xl lg:text-[6.2rem]",
}) => {
  return (
    <div className="bg-hero bg-cover bg-center  w-full h-[24rem] lg:h-[48rem]  relative overflow-clip">
      <Header />

      <div className="hidden lg:block ">
        <div className="-top-[3rem] absolute  inset-x-0">
          <img
            src="/lines-hero.svg"
            alt=""
            className="w-full opacity-70 mx-auto"
          />
        </div>
      </div>
      <div className="hidden lg:block ">
        <div className="bottom-5 absolute  inset-x-0 animate-pulse">
          <img
            src="/lines-hero1.svg"
            alt=""
            className="w-full opacity-70 mx-auto "
          />
        </div>
      </div>

      <section className=" w-[100%] h-full  flex items-center justify-center  ">
        <div className="container">
          <div className="text-center max-w-xs mt-24   xl:mt-10 lg:max-w-4xl  mx-auto">
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
