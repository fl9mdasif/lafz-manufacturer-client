import c1 from '../../assets/img/Certificates/1.png';
import c2 from '../../assets/img/Certificates/2.png';
import c3 from '../../assets/img/Certificates/3.png';
import c4 from '../../assets/img/Certificates/4.png';
import c5 from '../../assets/img/Certificates/5.png';
import c6 from '../../assets/img/Certificates/6.png';
import c7 from '../../assets/img/Certificates/7.png';

import './Home.styles.css'
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from "swiper";

const CertificatesCarousel = () => {
    return (
        <>
            <div className="py-5">
                <div><h2 className="certificateH2 text-base1 text-center ">Halal certificates</h2></div>
                <div><p className="certificatep  text-center lg:text-lg sm:text-sm ">Our Halal Certificates come from globally recognized bodies <br />
                    in Bangladesh, Europe, UAE, India and more!</p></div>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                // centeredSlides={true}
                Navigation={true}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide><img className="" src={c1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c6} alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src={c7} alt="" /></SwiperSlide>

            </Swiper>
        </>
    );
};

export default CertificatesCarousel;