"use client";
import ArrowRight from '@/assets/arrow-right.svg';
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue) )
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8999ce,#EAEEFE_100%)] overflow-x-clip">
      <div className="container max-w-none lg:w-full">
        <div className='md:flex items-center'>
          <div className="md:w-[678px] z-10">
            <div className="tag"> Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1"><span>Learn more</span><ArrowRight className="h-5 w-5" /></button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none lg:-right-6 z-0"
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              style={{
                translateY: translateY
              }}
              src={cylinderImage.src} width={220} height={220} alt="Cylinder image" className="hidden lg:block -top-8 lg:-left-48 md:absolute" />
            <motion.img
              style={{
                translateY: translateY,
                rotate: 30,
              }}
              src={noodleImage.src} width={220} alt="Noodle image" className="hidden lg:block absolute top-[544px] -right-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
