import React, { useEffect, useState } from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInLeft } from "@/keyframes";
import Image from "next/image";
import moment from "moment";
import "moment/locale/mn";
import Link from "next/link";

const Tickets = () => {
  const getNextTuesdayAndThursday = () => {
    const today = new Date();

    const utcTime = today;

    const upcomingDays = { tuesday: null, thursday: null };
    let currentDate = utcTime;
    while (!upcomingDays.tuesday || !upcomingDays.thursday) {
      const dayOfWeek = currentDate.getUTCDay();
      if (dayOfWeek === 2 && !upcomingDays.tuesday) {
        upcomingDays.tuesday =
          currentDate.toLocaleDateString().split("/")[0] +
          "/" +
          currentDate.toLocaleDateString().split("/")[1];
      }
      if (dayOfWeek === 4 && !upcomingDays.thursday) {
        upcomingDays.thursday =
          currentDate.getMonth() + 1 + "/" + currentDate.getDate();
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return upcomingDays;
  };

  const [tuesday, setTuesday] = useState("");
  const [thursday, setThursday] = useState("");

  useEffect(() => {
    setTuesday(getNextTuesdayAndThursday().tuesday);
    setThursday(getNextTuesdayAndThursday().thursday);
  }, []);

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
              Эхлэх өдөр : Мягмар гариг бүр
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
          <div className="flex-1 items-center lg:ml-5">
            <div className="text-center p-2 sm:text-2xl">Quiz Night</div>
            <div className="text-center p-2 xs:text-xl">
              Хаяг байршил : Баянгол ресторан
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх өдөр : Пүрэв гариг бүр
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
      {/* <Reveal keyframes={fadeInLeft} triggerOnce>
        <div className="transition duration-300 ease-in-out bg-[#ffffff1a] p-5 rounded-lg shadow-lg flex flex-col lg:flex-row mt-10">
          <div className="rounded-lg overflow-hidden mb-3 relative w-full h-[300px] sm:h-[200px] lg:w-[350px] lg:h-[300px]">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="/collections/Singles.jpeg"
              alt="Singles Quiz"
            />
          </div>
          <div className="flex-1 lg:ml-5">
            <div className="text-center p-2 sm:text-2xl">SINGLES QUIZ</div>
            <div className="text-center p-2 xs:text-xl">
              Хаяг байршил : Титэм Ресторан (Holiday Inn зочид буудлын 20
              давхар)
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх өдөр : 2024 11 сар 27
            </div>
            <div className="text-center p-2 xs:text-xl">
              Эхлэх/Дуусах хугацаа : 19:00
            </div>
            <div className="text-center p-2 xs:text-xl">
              Тайлбар : Quiz Night тэмцээний байнгын оролцогч нартаа зориулаад
              заавал баг бүрдүүлэх шаардлагагүй ганцаараа ирээд шууд оролцох
              боломжтой шинэ эвэнтийг та бүхэндээ зориулж зарлаж байна. Та
              тасалбараа аваад цагтаа ирээд санаандгүйгээр багт хувиарлагдах юм.
            </div>
            <div className="text-center p-2 xs:text-xl">Үнэ : 20,000₮</div>
            <div className="text-center p-2 xs:text-xl">
              <Link
                href="https://www.portal.mn/events/673bfbaa383bdbe1fe25d272"
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
      </Reveal> */}
    </Container>
  );
};

export default Tickets;
