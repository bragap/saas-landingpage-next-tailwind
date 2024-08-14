import Image from 'next/image';
import logo from '@/assets/logosaas.png';
import Insta from '@/assets/social-insta.svg';
import Linkedin from '@/assets/social-linkedin.svg';
import X from '@/assets/social-x.svg';
import Youtube from '@/assets/social-youtube.svg';
import Pin from '@/assets/social-pin.svg';


export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] mt-16 py-16 px-0">
    <div className="container max-w-none h-full lg:h-[300px]">
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <div className="flex flex-col w-full md:w-2/6 lg:w-1/6 space-y-10 md:space-y-24">
          <div className="flex flex-col gap-5">
            <div className="w-10 inline-flex relative before:content-[''] before:h-8 before:blur before:w-8 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
              <Image src={logo} alt="logo" width={40} height={40} className="relative"/>
            </div>
            <p className=" text-sm">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
          </div>
          <div className="flex gap-1 ">
            <Insta alt="insta" width={40} height={40} />
            <Linkedin alt="linkedin" width={40} height={40} />
            <X alt="x" width={40} height={40} />
            <Youtube alt="youtube" width={40} height={40} />
            <Pin alt="pin" width={40} height={40} />
          </div>
        </div>

        <div className="flex mt-10 flex-col md:px-2 space-y-8 lg:px-0 md:space-y-0 md:mt-0 md:flex-row gap-6 md:space-x-3 lg:space-x-6 ">
          <ul className="space-y-5">
            <li className="text-sm text-white font-bold">Product</li>
            <li className="text-sm">Features</li>
            <li className="text-sm">Integrations</li>
            <li className="text-sm">Updates</li>
            <li className="text-sm">FAQ</li>
            <li className="text-sm">Pricing</li>
          </ul>
          <ul className="space-y-5">
            <li className="text-sm text-white font-bold">Company</li>
            <li className="text-sm">About</li>
            <li className="text-sm">Blog</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Manifesto</li>
            <li className="text-sm">Press</li>
            <li className="text-sm">Contact</li>
          </ul>
          <ul className="space-y-5">
            <li className="text-sm text-white font-bold">Resources</li>
            <li className="text-sm">Examples</li>
            <li className="text-sm">Community</li>
            <li className="text-sm">Guides</li>
            <li className="text-sm">Docs</li>
          </ul>
          <ul className="space-y-5">
            <li className="text-sm text-white font-bold">Legal</li>
            <li className="text-sm">Privacy</li>
            <li className="text-sm">Terms</li>
            <li className="text-sm">Cookie Policy</li>
          </ul>

        </div>
      </div>

    </div>
  </footer>
};
