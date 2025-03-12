import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "@/keyframes";
import Image from "next/image";
import Container from "./Container";

const Sponsor = () => {
  return (
    <Container className="flex justify-center items-center mb-32 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <div className="flex items-center justify-center w-full h-[100px]">
            <div className="relative w-full h-full md:w-[400px] md:h-[100px] max-md:h-[200px] max-md:w-[180px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                src="/collections/Portal.png"
                alt="binance"
              />
            </div>
          </div>
        </Reveal>

        <Reveal keyframes={fadeInUp} duration={800} delay={600}>
          <div className="flex items-center justify-center w-full h-[130px]">
            <div className="relative w-full h-full md:w-[231px] md:h-[130px] max-md:h-[200px] max-md:w-[100px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                src="/collections/san-miguel.jpeg"
                alt="blockchainio"
              />
            </div>
          </div>
        </Reveal>
        <Reveal keyframes={fadeInUp} duration={800} delay={600}>
          <div className="flex items-center justify-center w-full h-[130px]">
            <div className="relative w-full h-full md:w-[231px] md:h-[130px] max-md:h-[200px] max-md:w-[100px]">
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                src="/collections/bayangol.png"
                alt="blockchainio"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
};

export default Sponsor;
