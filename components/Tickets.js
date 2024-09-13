import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInLeft } from "@/keyframes";
import Image from "next/image";
import moment from "moment";
import "moment/locale/mn";
import Link from "next/link";

const Tickets = () => {
  const now = moment();
  const firstDayOfMonth = now.startOf("month");
  const dayOfWeek = firstDayOfMonth.day(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const targetDayOfWeek = 2; // Tuesday
  const offset = (targetDayOfWeek - dayOfWeek + 7) % 7;
  let firstTuesday = firstDayOfMonth.add(offset, "days");

  if (firstTuesday.isAfter(now.endOf("month"))) {
    firstTuesday = firstTuesday
      .add(1, "month")
      .startOf("month")
      .day(targetDayOfWeek);
  }

  return (
    <Container className="mb-44 scroll-mt-10" id="tickets">
      <div className="text-center mb-8 mt-40">
        <h2 className="font-bold text-3xl mb-2">Тасалбар</h2>
        <h2 className="font-bold text-xl mb-2">
          Телевизийн хамгийн их үзэгчтэй нэвтрүүлгүүдийн дийлэнх нь тааварт
          нэвтрүүлэг байдаг нь хүмүүсийн сониуч зан болон өрсөлдөх дуртай
          байдагтай холбоотой. QUIZ NIGHT бол найз нөхөд, хамт олноороо тэмцээнд
          оролцохын хажуугаар цагийг зугаатай өнгөрүүлэх боломж олгодог үйл
          ажиллагаа юм.
        </h2>
      </div>

      <Reveal keyframes={fadeInLeft} triggerOnce>
        <div className="transition duration-300 ease-in-out bg-[#ffffff1a] p-5 rounded-lg shadow-lg flex flex-col lg:flex-row">
          <div className="rounded-lg overflow-hidden mb-3 relative w-full h-[300px] sm:h-[300px] lg:w-[350px] lg:h-[300px]">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/collections/tuesday.png"
              alt="Tuesday Event"
            />
          </div>
          <div className="flex-1 lg:ml-5">
            <div className="text-center p-2 sm:text-2xl">Rookie Quiz</div>
            <div className="text-center p-2">
              Хаяг байршил : Баянгол ресторан
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх өдөр : 7 хоног бүрийн Мягмар гариг
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх/Дуусах хугацаа : 19:00 - 23:00
            </div>
            <div className="text-center p-2 xs:text-xl">
              Тайлбар : Quiz Night тэмцээнд оролцох ширээ болон багийн бооцооны
              мөнгө багтсан
            </div>
            <div className="text-center p-2 xs:text-xl">Үнэ : 100,000₮</div>
            <div className="text-center p-2 xs:text-xl">
              <Link
                href="https://www.portal.mn/quiznight/66b19f26d290ccac18731044"
                passHref
              >
                <Button
                  className="bg-gradient-to-r from-[#B75CFF] to-[#671AE4] w-full lg:w-[400px] mt-3 flex-1 justify-center"
                  as="a"
                >
                  Ширээ захиалах
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal keyframes={fadeInLeft} triggerOnce>
        <div className="transition duration-300 ease-in-out bg-[#ffffff1a] p-5 rounded-lg shadow-lg flex flex-col lg:flex-row mt-10">
          <div className="rounded-lg overflow-hidden mb-3 relative w-full h-[300px] sm:h-[200px] lg:w-[350px] lg:h-[300px]">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/collections/thursday.png"
              alt="Thursday Event"
            />
          </div>
          <div className="flex-1 lg:ml-5">
            <div className="text-center p-2 sm:text-2xl">Quiz Night</div>
            <div className="text-center p-2 xs:text-xl">
              Хаяг байршил : Баянгол ресторан
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх өдөр : 9/23-ны Даваа гариг
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх/Дуусах хугацаа : 19:00 - 23:00
            </div>
            <div className="text-center p-2 xs:text-xl">
              Тайлбар : Quiz Night тэмцээнд оролцох ширээ болон багийн бооцооны
              мөнгө багтсан
            </div>
            <div className="text-center p-2 xs:text-xl">Үнэ : 100,000₮</div>
            <div className="text-center p-2 xs:text-xl">
              <Link
                href="https://www.portal.mn/quiznight/66b19dcad290ccac1873102d"
                passHref
              >
                <Button
                  className="bg-gradient-to-r from-[#B75CFF] to-[#671AE4] w-full lg:w-[400px] mt-3 flex-1 justify-center"
                  as="a"
                >
                  Ширээ захиалах
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
};

export default Tickets;
