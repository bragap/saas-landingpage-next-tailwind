"use client"
import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return <section ref={productRef} className="bg-gradient-to-b from-[#FFFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container  max-w-none">
      <div className=" md:max-w-[540px] lg:max-w-[800px] mx-auto text-center space-y-6">
        <div className="tag">Boost your productivity</div>
        <h2 className="section-title">A more effective way to track progress</h2>
        <p className="section-description">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
      </div>
      <div className="relative">
        <Image src={productImage} alt="Product Image" className="" />
        <motion.img
          src={pyramidImage.src} alt="Pyramid Image" className="hidden md:block absolute top-0 -right-24" height={262} width={262} 
          style={{ translateY }}
          />
        
        <motion.img
          style={{ translateY }}
          src={tubeImage.src} alt="Tube Image" className="hidden md:block absolute bottom-10 -left-24" height={262} width={262} />
      </div>
    </div>
  </section>;
};
