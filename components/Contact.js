import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "@/keyframes";
import Image from "next/image";
import Container from "./Container";

const Contact = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-32 items-center">
      <Reveal keyframes={fadeInUp} duration={800} delay={200}>
        <div className="flex items-center justify-center flex-col md:flex-row text-center md:text-left">
          <div className="flex items-center justify-center relative w-[200px] h-[60px] mb-2 md:mb-0">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              src="/collections/home.png"
              alt="binance"
            />
          </div>
          <h1 className="font-bold text-lg md:text-xl">
            Улаанбаатар хот, Сүхбаатар дүүрэг, Чингисийн өргөн чөлөө, Баянгол
            ресторан
          </h1>
        </div>
      </Reveal>

      <Reveal keyframes={fadeInUp} duration={800} delay={400}>
        <div className="flex items-center justify-center flex-col md:flex-row text-center md:text-left">
          <div className="flex items-center justify-center relative w-[50px] h-[60px] mb-2 md:mb-0">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              src="/collections/telephone.png"
              alt="ethereum"
            />
          </div>
          <h1 className="font-bold ml-0 md:ml-6 text-lg md:text-xl">
            88056356 , 88883648
          </h1>
        </div>
      </Reveal>

      <Reveal keyframes={fadeInUp} duration={800} delay={600}>
        <div className="flex items-center justify-center flex-col md:flex-row text-center md:text-left">
          <div className="flex items-center justify-center relative w-[50px] h-[60px] mb-2 md:mb-0">
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              src="/collections/email.png"
              alt="blockchainio"
            />
          </div>
          <h1 className="font-bold ml-0 md:ml-6 text-lg md:text-xl">
            contact@quiznight.mn
          </h1>
        </div>
      </Reveal>
    </Container>
  );
};

export default Contact;
