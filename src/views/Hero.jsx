import { useEffect, useState } from 'react';

// local imports
import heroImage from '../assets/hero-image.svg';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/cart-icon.svg';
import searchIcon from '../assets/search-icon.svg';

import { heroTitle, heroSubtitle, services, products } from '../data';

import FadeIn from '../components/FadeIn';
import NavLink from '../components/NavLink';

// react icons
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Hero = () => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  });
  return (
    <div className="h-screen relative flex flex-col items-center" style={{ background: `url(${heroImage})`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className={`fixed w-full max-w-[1490px] flex items-center justify-between h-[100px] sm:h-[120px] mx-auto px-10 z-[20] ${active ? 'bg-black ' : ''} transition-all duration-300`}>
        <img src={logo} alt="" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[60px]">
          <NavLink to="services">Service</NavLink>
          <NavLink to="products">Shop</NavLink>

          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>
        <img src={cartIcon} alt="" className="hidden md:block cursor-pointer" />
        <HiMenuAlt3 size={30} className="md:hidden block cursor-pointer text-white" onClick={() => setShowMenu((prev) => !prev)} />

        <div className={`block md:hidden w-full fixed ${!showMenu ? '-top-[410px]' : 'top-0'} left-0 bg-opacity-90 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}>
          <AiOutlineClose size={25} className="absolute top-5 right-5 cursor-pointer" onClick={() => setShowMenu(false)} />
          <ul className="pt-[60px] items-center flex flex-col gap-4">
            <NavLink mobileMenu to="services">
              Service
            </NavLink>
            <NavLink mobileMenu to="products">
              Shop
            </NavLink>

            <NavLink mobileMenu to="reference">
              Reference
            </NavLink>
            <NavLink mobileMenu to="care">
              Care
            </NavLink>
          </ul>
          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>
      <FadeIn delay={0.2} direction={'down'} padding fullWidth>
        <h1 className="mt-[200px] text-center text-4xl leading-tight sm:text-[44px] text-white max-w-[950px]">{heroTitle}</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction={'down'} padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">{heroSubtitle}</h5>
      </FadeIn>
      <FadeIn delay={0.2} direction={'up'} padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11 ">
          <input type="text" placeholder="Search" className="rounded-full w-full pl-6 pr-[68px] py-3 bg-primary outline-none text-white text-base xs:text-lg placeholder:white" />
          <img src={searchIcon} alt="" className="absolute top-1/2 -translate-y-1/2 right-3 h-9 w-11 cursor-pointer" />
        </div>
      </FadeIn>
      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)] 0%,#FFFFFF 100%)]"></div>
    </div>
  );
};

export default Hero;
