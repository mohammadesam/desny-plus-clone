import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImageSlider() {
  return (
    <Carousel {...settings}>
      <Warp>
        <img src="/images/slider-badag.jpg" />
      </Warp>

      <Warp>
        <img src="/images/slider-badging.jpg" />
      </Warp>

      <Warp>
        <img src="/images/slider-scale.jpg" />
      </Warp>

      <Warp>
        <img src="/images/slider-scales.jpg" />
      </Warp>
    </Carousel>
  );
}

export default ImageSlider;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Carousel = styled(Slider)`
  margin: 25px 0;

  ul li.slick-active {
    button::before {
      color: white;
    }
  }

  .slick-dots {
    li > button::before {
      color: rgb(150, 158, 173);
    }
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Warp = styled.div`
  cursor: pointer;

  img {
    border: solid 4px transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    transition: 0.3s;
  }

  img:hover {
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
