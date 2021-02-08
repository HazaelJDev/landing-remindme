import ContactUs from "../components/ContactUs";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <>
      <Nav />
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
  );
}
