import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function ImageSlider(props: { images: string[] }) {
  const { images } = props;

  let productSlides = images.map((image, key) => (
    <SwiperSlide key={key}>
      <img
        src={image}
        alt={image}
        className="w-96 h-96 aspect-square md:aspect-auto object-cover bg-gray-100"
        loading="lazy"
      />
    </SwiperSlide>
  ));

  return (
    <div className="sliderWrapper">
      <Swiper
        modules={[Pagination]}
        loop={images.length > 1}
        pagination={{ clickable: true, bulletActiveClass: 'bg-black opacity-100' }}
        className="md:hidden w-full"
      >
        {productSlides}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
