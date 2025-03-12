import React from "react";
import { JackInTheBox, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "@/keyframes";
import Image from "next/image";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className={"flex flex-col sm:flex-row mt-20 mb-32"}>
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className="text-1xl lg:text-4xl font-bold mb-10">
            🚨QUIZ NIGHT🚨
          </h1>
          <h1 className="text-1xl lg:text-4xl font-bold mb-10">
            Улаанбаатар хотын хамгийн том асуулт хариултын тэмцээн
          </h1>
        </Reveal>
      </div>

      <div className="flex-1 mt-14 sm:mt-0 ">
        <JackInTheBox delay={200} triggerOnce>
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-md">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              src="/logo.png"
              alt="hero"
              className="rounded-md"
            />
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
