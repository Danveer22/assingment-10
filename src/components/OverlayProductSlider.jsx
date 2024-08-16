import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

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
  position: absolute;
  top: 40%;
  left: 50%;
  width: 30%;
  z-index: 999;
  transform: translate(-50%, -50%);
`;

const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 1rem;
  }

  .slick-prev:before,
  .slick-next:before {
    background-color: green;
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

// ProductSlider component
function ProductSlider() {
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
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <StyledSlide key={index}>
            <img src={img.desktop} alt={`Slide ${index + 1}`} />
          </StyledSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default ProductSlider;
