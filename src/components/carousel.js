import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 1s linear;
  animation: scroll 10s infinite linear; /* Adjust duration as needed */
  @keyframes scroll {
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 40vh;
  object-fit: cover;
`;

const HorizontalCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Adjust interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselContainer>
      <ImageContainer ref={imageContainerRef}>
        {images.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Carousel ${index}`} />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;
