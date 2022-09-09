import {ShopMainCarouselContainer} from "./styles";
import {Autoplay, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopMainCarousel = () => {
    return <ShopMainCarouselContainer>
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay, Pagination, Scrollbar]}
            scrollbar={{draggable: true}}
        >
            <SwiperSlide>
                <img src="/Carousel/Carousel0.jpg" alt="Carousel Image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/Carousel/Carousel1.jpg" alt="Carousel Image"/>
            </SwiperSlide>
        </Swiper>
    </ShopMainCarouselContainer>
}

export default ShopMainCarousel;