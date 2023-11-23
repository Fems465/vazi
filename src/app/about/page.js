"use client";
import HeroSection from "../../components/HeroSection";
import Content from "../../components/Content";
import AboutCard from "../../components/AboutCard";
import Fade from "react-reveal/Fade";
import { Reveal } from "react-reveal";

export default function about() {
  return (
    <main className="bg-wave bg-repeat">
      <div>
        <HeroSection
          title="We are more than just a law firm"
          cspan="we get it!"
        />
      </div>

      <section className="pt-24 pb-8">
        <div className="container">
          <Reveal>
            {" "}
            <div className="flex justify-center flex-col lg:flex-row  gap-6">
              <AboutCard
                iconSrc="/icons/flag.svg"
                title="Truly Collaborative"
                content="A journey shared is a journey enriched, our team works closely with our clients, truly understanding their vision and crafting legal strategies that align with their business objectives, we break complex legal jargon into understandable, actionable legal actions, central to our mission is making legal processes less daunting for our clients."
              />

              <AboutCard
                iconSrc="/icons/fence.svg"
                title="Ever Evolving"
                content="The world changes, and so do we. Our team is committed to continuous learning thus ensuring our legal solutions are always a step ahead in the fast paced tech eco system.  ready to meet the demands of the business environment."
              />

              <AboutCard
                iconSrc="/icons/badge.svg"
                title="Dedicated Hands"
                content="Our relationships are built on trust and transparency. We uphold the highest standards of professionalism, ensuring that our clients always know they are in reliable hands. As a practice, we enable our clients to make informed decisions confidently by offering not just legal advice but providing legal empowerment."
              />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="text-center pt-[6em] pb-28 align-middle">
        <Fade bottom>
          <Content
            title="We are the leading tech law firm 
          representing investors, start-up and technology driven companies"
            stitle="globally."
            subtitle1="Our team is qualified with a robust network of
          multi-jurisdictional"
            content1=" qualified lawyers with over
          30 years of combined experience."
            subtitle2="By fostering relationships with key stakeholders invaluable in the tech eco system, "
            content2=" Vazi remains top tier choice tech focused law practice operating in the most vibrant markets."
            titleWidth="w-[19rem] lg:w-[36rem]"
            textsize="text-xl lg:text-3xl"
          />
        </Fade>
      </section>
    </main>
  );
}
