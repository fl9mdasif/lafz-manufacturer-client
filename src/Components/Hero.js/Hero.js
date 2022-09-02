import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import './Hero.styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import hero1 from '../../assets/img/heroImg/lafz_banners_1440x550_lip_care_web_bnner.jpg';
import hero2 from '../../assets/img/heroImg/mashrafe_banner-02.jpg';
import hero3 from '../../assets/img/heroImg/ohsogo_banner_web.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
            >
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero1} alt="" />
                        <div className="absolute1 flex flex-col  justify-start">

                            <div className=" flex justify-start">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn drop-shadow-xl heroBtn text-italic btn-sm bg-base"
                                >Buy now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero2} alt="" />
                        <div className="absolute1 flex flex-col  justify-center">

                            <div className=" flex justify-start">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#232324' }}
                                    className="btn heroBtn text-italic btn-sm   bg-base">Buy now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero3} alt="" />
                        <div className="absolute1 flex flex-col justify-end">

                            <div className=" flex justify-en">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn heroBtn btn-sm bg-base ">Buy now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
            </Swiper >

        </div>

    );
};

export default Hero;