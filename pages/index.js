import AboutUs from "@/components/AboutUs";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsor";
import Tickets from "@/components/Tickets";
import React from "react";

const Home = () => {
  return (
    <div className="h-full main_bg text-white overflow-hidden" id="top">
      <Navbar />
      <Hero />
      <Tickets />
      <AboutUs />
      <Collections />
      <h1 className="font-bold text-3xl text-center mb-12 mt-40">
        Хамтрагч байгууллагууд
      </h1>
      <Sponsor />
      <h1 className="font-bold text-3xl text-center mb-8">Холбоо барих</h1>

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
