import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

// Array of image paths
const imgs = [
  {
    desktop: "images/image-product-1.jpg",
    thumbnail: "images/image-product-1-thumbnail.jpg",
  },
  {
    desktop: "images/image-product-2.jpg",
    thumbnail: "images/image-product-2-thumbnail.jpg",
  },
  {
    desktop: "images/image-product-3.jpg",
    thumbnail: "images/image-product-3-thumbnail.jpg",
  },
  {
    desktop: "images/image-product-4.jpg",
    thumbnail: "images/image-product-4-thumbnail.jpg",
  },
];

// Styled components

const SliderContainer = styled.div`
  position: relative;
  height: 41rem;

  @media (max-width: 375px) {
    height: 20rem;
    align-self: center;
  }
`;

const StyledSlide = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 1rem;

    @media (max-width: 375px) {
      border-radius: 0;
    }
  }
`;

const StyledThumbnail = styled.img`
  width: 6.6rem;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  border: 3px solid transparent;
  transition: border-color 0.2s ease;

  .slick-dots li.slick-active & {
    border-color: var(--color-primary);
    opacity: 0.8;
  }
`;

const SliderButton = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    transition: all 0.3s ease;
  }

  &:active img {
    transform: scale(1.1);
  }
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    display: none !important;

    @media (max-width: 375px) {
      display: block !important;
    }
  }
  @media (max-width: 375px) {
    .slick-dots {
      display: none !important;
    }
  }
`;

// ProductSlider component
function ProductSlider({ onSlider }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 375);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    if (!isMobile) {
      onSlider((value) => !value);
    }
  }
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <StyledThumbnail src={imgs[i].thumbnail} alt={`Thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {imgs.map((img, index) => (
          <StyledSlide key={index}>
            <SliderButton onClick={handleClick}>
              <img src={img.desktop} alt={`Slide ${index + 1}`} />
            </SliderButton>
          </StyledSlide>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
}

export default ProductSlider;
