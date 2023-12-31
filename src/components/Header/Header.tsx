import React, { useState, useEffect } from "react";

import { useTheme } from "@/components/theme-provider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

import { NavigationMenu, Accordion } from "@/components";

import { User2, Phone, Sun, Moon } from "lucide-react";
import imgUrl from "/logo.jpg";
import DoctorConsultation from '../../../public/doctorConsultation.png';
import Pharmacy from '../../../public/Pharmacy.png';
import Diagnostic from '../../../public/diagnosticTests.png';
import HealthCare from '../../../public/homeNursing.png';
import Ambulance from '../../../public/ambulance11.png';
import Whatsapp from '../../../public/whatsapp.png';
import Call from '../../../public/call.png';
import Backtotop from '../../../public/Backtotop.png';



export default function Header() {
  const { theme, setTheme } = useTheme();
  const [hamburger, setHamburger] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleHamburger = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHamburger((prev) => !prev);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 200); // Show the button when scrolled down 200px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col w-full px-2 md:px-10 lg:px-20 py-2 justify-between">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="w-16 gap-8 flex flex-row items-center">
            <img
              src={imgUrl}
              className="object-contain h-full w-full rounded-lg"
              alt="logo"
            />
            <Input
              type="text"
              placeholder="Search..."
              className="w-[200px] hidden md:block"
            />
          </div>
          <div className="">
            <div className="flex flex-row justify-between items-center space-x-4">
              <a href="/login">
                <div className="flex flex-row items-center space-x-1">
                  <User2 size={20} absoluteStrokeWidth />
                  <p className="text-xs hidden md:block">Login/Signup</p>
                </div>
              </a>

              <a className="hidden md:block">
                <div className="flex flex-row items-center space-x-1">
                  <Phone size={20} absoluteStrokeWidth />
                  <div className="flex flex-col">
                    <div className="text-xs">Customer Support</div>
                    <div className="text-xs">+91 93117 91119</div>
                  </div>
                </div>
              </a>

              <div>
                <Switch
                  id="darkmode"
                  checked={theme === "dark"}
                  onCheckedChange={() =>
                    setTheme(theme == "dark" ? "light" : "dark")
                  }
                  className="hidden"
                />
                <Label htmlFor="darkmode" className="cursor-pointer">
                  {theme == "dark" ? <Sun /> : <Moon />}
                </Label>
              </div>

              <div
                className="md:block lg:hidden xl:hidden 2xl:hidden cursor-pointer"
                onClick={handleHamburger}
              >
                <div className="space-y-2">
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                  <div className="w-8 h-0.5 bg-gray-800 dark:bg-gray-300"></div>
                </div>
              </div>

            </div>
            <div className="md:block lg:hidden xl:hidden 2xl:hidden cursor-pointer">
              <section
                className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-white-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20">
                <div id="tabs" className="flex justify-between">
                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={DoctorConsultation} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Consultation </span>
                  </a>

                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Pharmacy} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Pharmacy</span>
                  </a>


                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Diagnostic} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Diagnostic</span>
                  </a>
                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={Ambulance} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>Ambulance</span>
                  </a>
                  <a href="/" className="w-full focus:text-royal hover:text-royal flex flex-col items-center justify-center text-center pt-2 pb-1 hover:bg-white">
                    <img src={HealthCare} alt="Doctor Consultation" className="max-w-full h-6 mb-1" />
                    <span className="tab block text-xs" style={{ fontSize: '0.60rem' }}>HealthCare</span>

                  </a>
                </div>
              </section>
            </div>

          </div>
        </div>

        <div className="fixed right-0 bottom-10 lg:right-4 lg:bottom-4 z-110 p-5 space-y-2">
          <a href="tel:+91 93117 91119" title="Call us" className="md:ml-2 mr-4">
            <img src={Call} alt="Doctor Consultation" className="max-w-full h-11 mb-1" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=+91 93117 91119&text=Hello%20send%20me%20Quotation%20for%20FullBody%20Checkup!" title="Share on WhatsApp" className="md:ml-2 mr-4">
            <img src={Whatsapp} alt="Doctor Consultation" className="max-w-full h-11 mb-1" />
          </a>


          {showBackToTop && (
            <div
              className="fixed left-3 bottom-5 z-50 p-3 bg-royal text-white cursor-pointer rounded-full"
              onClick={scrollToTop}
            >
              <a className="md:ml-2 mr-7">
                <img src={Backtotop} alt="Doctor Consultation" className="max-w-full h-7 mb-1" />
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-row border-t-2 border-gray py-2 justify-evenly">
          <div className="hidden lg:block">
            <NavigationMenu />
          </div>
          {hamburger && (
            <div
              className={`w-full md:block lg:hidden xl:hidden 2xl:hidden absolute z-10 bg-white dark:bg-[#020817] ${hamburger ? "h-screen" : "hidden"
                }`}
            >
              <Accordion />
            </div>
          )}
        </div>


      </div>
    </>
  );
}
