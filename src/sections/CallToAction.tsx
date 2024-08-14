import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

export const CallToAction = () => {
  return <section className="my-20 overflow-x-clip">
    <div className="container max-w-none text-center">
      <div className="flex flex-col items-center">
        <div className=" md:max-w-[540px] lg:max-w-[800px] mx-auto text-center space-y-6">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
        <div className="flex gap-1 items-center mt-[50px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1"><span>Learn more</span><ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div className="relative">
      <Image src={starImage} height={320} width={320} alt=" star image" className="hidden md:block absolute  -left-36 bottom-8 lg:-left-28" />
      <Image src={springImage} height={320} width={320} alt="spring image"className="hidden md:block absolute -bottom-20 -right-36 lg:-right-24" />
      </div>

    </div>
  </section>
};
