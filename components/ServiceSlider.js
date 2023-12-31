import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description:
      'Creating a distinctive identity, and fostering a meaningful connection.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Translating ideas into visual and user-centric experiences.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Empowering innovation through expert development.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description:
      'Crafting persuasive written content that resonates the audience.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Elevate your online presence with our tailored SEO solutions.',
  },
];

const ServiceSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[340px]'
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-8'>
                  <div className='text-lg mb-2'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ServiceSlider;
