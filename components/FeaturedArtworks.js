import { list_artwork } from "@/fake_data";
import React from "react";
import { Container, NFTItem } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter } from "@/keyframes";

const FeaturedArtworks = () => {
  return (
    <Container className={"mb-44 scroll-mt-10"} id="feature">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2"> Өрсөлдөөн</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-flow-row-dense grid-flow-col-dense-dense sm:grid-cols-2  md:grid-cols-3 gap-4">
        {list_artwork.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={item.delay}
          >
            <NFTItem data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedArtworks;
