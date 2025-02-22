import { TradeCard } from '../TradeCard/TradeCard';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './PrevDeals.scss';
import { useRef } from 'react';

export const PrevDeals = () => {
  return (
    <section className="prev-deals _container">
      <h3 className="prev-deals__title">Прошедшие сделки</h3>
      <p className="prev-deals__subtitle">Онлайн</p>
      <div className="prev-deals__container">
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          loop={true}
          grabCursor={true}
          freeMode={true}
        >
          <SwiperSlide className="prev-deals__card">
            <TradeCard />
          </SwiperSlide>
          <SwiperSlide className="prev-deals__card">
            <TradeCard />
          </SwiperSlide>
          <SwiperSlide className="prev-deals__card">
            <TradeCard />
          </SwiperSlide>
          <SwiperSlide className="prev-deals__card">
            <TradeCard />
          </SwiperSlide>
          <SwiperSlide className="prev-deals__card">
            <TradeCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
