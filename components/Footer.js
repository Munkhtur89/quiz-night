import React from "react";
import Container from "./Container";

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <Container className={"pb-10"}>
      <div
        onClick={scrollToTop}
        className="animate-bounce  h-14 w-14 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-full bg-gradient-to-b font-bold from-[#B75CFF] to-[#671AE4] mx-auto flex justify-center items-center"
      >
        UP&uarr;
      </div>
    </Container>
  );
};

export default Footer;
