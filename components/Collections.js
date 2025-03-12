import { list_collection } from "@/fake_data";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";
import Container from "./Container";
import NFTItem from "./NFTItem";
const Collections = () => {
  return (
    <Container id="collections" className={"mb-44 scroll-mt-10"}>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Quiz Night</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list_collection.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={50 * (i + 1)}
          >
            <NFTItem data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default Collections;
