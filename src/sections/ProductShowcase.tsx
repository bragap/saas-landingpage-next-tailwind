import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container  max-w-none">
      <div className=" md:max-w-[540px] lg:max-w-[800px] mx-auto text-center space-y-6">
        <div className="tag">Boost your productivity</div>
        <h2 className="section-title">A more effective way to track progress</h2>
        <p className="section-description">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
      </div>
      <div className="relative">
      <Image src={productImage} alt="Product Image" className="" />
      <Image src={pyramidImage} alt="Pyramid Image" className="hidden md:block absolute top-0 -right-24" height={262} width={262}/>
      <Image src={tubeImage} alt="Tube Image" className="hidden md:block absolute bottom-20 -left-24" height={262} width={262}/>
      </div>
    </div>
  </section>;
};
