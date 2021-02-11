import ContactUs from "../components/ContactUs";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useState, useEffect, createContext } from "react";
import { useTheme } from "next-themes";

export const darkModeContext = createContext();

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState("dark_mode");
  const [menu, setMenu] = useState("menu");

  const handleDarkMode = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
      setDarkMode(theme === "dark" ? "dark_mode" : "light_mode");
    }
  };

  const handleMenu = () => {
    setMenu(menu === "menu" ? "close" : "menu");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <darkModeContext.Provider
      value={{ theme: theme, setTheme: setTheme, isMounted: isMounted }}
    >
      <>
        <Nav darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateX: -800
            },
            pageAnimate: {
              opacity: 1,
              translateX: 0
            }
          }}
        >
          <Hero />
          <Features />
          <Testimonials />
          <ContactUs />
        </motion.div>
      </>
    </darkModeContext.Provider>
  );
}
