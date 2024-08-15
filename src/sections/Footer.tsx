import Image from 'next/image';
import logo from '@/assets/logosaas.png';
import Insta from '@/assets/social-insta.svg';
import Linkedin from '@/assets/social-linkedin.svg';
import X from '@/assets/social-x.svg';
import Youtube from '@/assets/social-youtube.svg';
import Pin from '@/assets/social-pin.svg';


export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] py-16 px-0">
    <div className="container max-w-none h-full lg:h-[300px]">
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-center text-center md:text-left w-full md:w-2/6 lg:w-1/6 space-y-10 md:space-y-24">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <div className="w-10 inline-flex relative before:content-[''] before:h-8 before:blur before:w-8 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
              <Image src={logo} alt="logo" width={40} height={40} className="relative" />
            </div>
            <p className=" text-sm">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
          </div>
          <div className="flex gap-1">
            <Insta alt="insta" width={40} height={40} />
            <Linkedin alt="linkedin" width={40} height={40} />
            <X alt="x" width={40} height={40} />
            <Youtube alt="youtube" width={40} height={40} />
            <Pin alt="pin" width={40} height={40} />
          </div>
        </div>

        <div className="flex mt-10 p-0 w-full items-start justify-center md:justify-end md:px-2 lg:px-0 md:space-y-0 md:mt-0 gap-6 md:space-x-3 lg:space-x-6 ">
          <ul className="space-y-5  " key="1">
            <li className="text-sm text-white tracking-tighter  md:font-bold">Product</li>
            <li className="hidden md:block text-sm tracking-tighter" key="1.1">Features</li>
            <li className="hidden md:block text-sm tracking-tighter" key="1.2">Integrations</li>
            <li className="hidden md:block text-sm tracking-tighter" key="1.3">Updates</li>
            <li className="hidden md:block text-sm tracking-tighter" key="1.4">FAQ</li>
            <li className="hidden md:block text-sm tracking-tighter" key="1.5" >Pricing</li>
          </ul>
          <ul className="space-y-5 " key="2">
            <li className="text-sm text-white tracking-tighter md:font-bold">Company</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.1">About</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.2">Blog</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.3">Careers</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.4">Manifesto</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.5">Press</li>
            <li className="hidden md:block text-sm tracking-tighter" key="2.6">Contact</li>
          </ul>
          <ul className="space-y-5 " key="3">
            <li className="text-sm text-white tracking-tighter md:font-bold" key="3.1">Resources</li>
            <li className="hidden md:block text-sm tracking-tighter" key="3.2">Examples</li>
            <li className="hidden md:block text-sm tracking-tighter" key="3.3">Community</li>
            <li className="hidden md:block text-sm tracking-tighter" key="3.4">Guides</li>
            <li className="hidden md:block text-sm tracking-tighter" key="3.5">Docs</li>
          </ul>
          <ul className="space-y-5 " key="4">
            <li className="text-sm text-white tracking-tighter md:font-bold" key="4.1">Legal</li>
            <li className="hidden md:block text-sm tracking-tighter" key="4.2">Privacy</li>
            <li className="hidden md:block text-sm tracking-tighter" key="4.3">Terms</li>
            <li className="hidden md:block text-sm tracking-tighter" key="4.4">Cookie Policy</li>
          </ul>

        </div>
      </div>

    </div>
  </footer>
};
