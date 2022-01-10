import axios from "axios";
import React, { useEffect, useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/components/navigation/navigation.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Intro from "../../../components/intro/index";

SwiperCore.use([Pagination]);
const IntroContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 750,
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: { clickable: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        observer: true,
    };

    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true)
            setError(false)
            try {
                const result = await axios.get('https://reskybe.herokuapp.com/api/homepages')
                setData(result.data.data)
            } catch (error) {
                setError(true)
                
            }
            setIsLoading(false)
        }

        fetchData()
    }, [])
    return (
        <div className="intro-slider-wrap">
                <Swiper effect="fade" className="intro-slider" {...swiperOption}>
                { data &&
                    data.map((single, key) => {
                        return (
                            <SwiperSlide key={single.id}>
                                <Intro data={single} key={key} />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default IntroContainer;
