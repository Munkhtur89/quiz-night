import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInLeft } from "@/keyframes";
import Image from "next/image";
import Container from "./Container";
const AboutUs = () => {
  return (
    <Container className={"mb-44 scroll-mt-10"} id="about">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Бидний тухай</h2>
      </div>

      <div className="flex ">
        <div className="w-[44%] hidden sm:block">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                src="/collections/scroll5.jpg"
                alt="about us"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <p>
            UB Quiz Night шинэ улирал үргэлжилж байна. Шинэ улирлаас эхлэн бид
            МЯГМАР гараг бүр шинээр оролцож буй хүмүүстээ зориулсан ROOKIE QUIZ
            NIGHT эвэнтийг зохиож байна. Та бүхэн UB Quiz Night Group-ээс илүү
            дэлгэрэнгүй мэдээлэл аваарай. Оролцох хүсэлтэй хүн бүрт нээлттэй!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
