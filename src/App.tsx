import NavBar from '@components/NavBar';
import './styles/global.scss';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Portfolio from '@components/Portfolio';
import Customers from '@components/Customers';
import AboutUs from '@components/AboutUs';
import ContactUs from '@components/Contactus';
import Footer from '@components/Footer';
import { Route, Routes } from 'react-router-dom';
import ServiceDetail from '@components/Services/ServiceDetail';
import React from 'react';
import SideMenu from '@components/SideMenu';
import { motion } from 'framer-motion';
import HeroImg from '@components/Hero/HeroImg';
import VideoSection from '@components/VideoSection';

function App() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [cookieAccept, setCookieAccept] = React.useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('cookie-accept')) ? true : false;
  });

  const handleBodyOverflow = React.useCallback(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  const acceptCookie = () => {
    setCookieAccept(true);
    localStorage.setItem('cookie-accept', JSON.stringify(true));
  };

  React.useEffect(() => {
    handleBodyOverflow();
  }, [handleBodyOverflow]);

  return (
    <div className=" relative h-full w-full">
      <NavBar menuValue={showMenu} setShowMenu={setShowMenu} />
      <SideMenu menuValue={showMenu} setShowMenu={setShowMenu} />
      {!cookieAccept && (
        <div className=" text-sm md:text-base fixed left-1/2 w-full -translate-x-[50%] z-[9999] lg:w-3/4 flex-wrap rounded-t-lg p-4 bg-primary/80 text-white   bottom-0   flex items-center justify-center gap-5">
          <h4>
            the website use cookies to ensure important security and visitor
            functions.
            <p className=" font-bold underline cursor-pointer">Learn more</p>
          </h4>
          <div className=" flex gap-3 items-center">
            <button
              onClick={acceptCookie}
              className=" bg-dark px-5 py-2 rounded-md"
            >
              Accept cookies
            </button>
            <button className=" bg-transparent border-2 border-white px-5 py-2 rounded-md">
              Reject cookies
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Hero /> */}
              <HeroImg />
              <Services />
              <Portfolio />
              <VideoSection />
              <AboutUs />
              <Customers />
              <ContactUs />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        <Route path="/galerie" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
