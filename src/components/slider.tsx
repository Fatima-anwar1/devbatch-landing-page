import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <div className="w-full h-64 md:h-96 my-8">
      <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }} className="h-full">
        <SwiperSlide><img src="https://picsum.photos/1200/400" className="w-full h-full object-cover" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/1200/401" className="w-full h-full object-cover" /></SwiperSlide>
      </Swiper>
    </div>
  );
}