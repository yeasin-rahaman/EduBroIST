// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import './AllReviews.css'
const AllReviews = () => {

  return (
    <div className="py-5">
      <h1 data-text="User Reviews" className="text-center my-3 user-reviews">Books Gallery</h1>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            loop: true,
            speed: 600,

            slideShadows: true
          }
          }
          autoplay={{
            delay: 1000
          }}


          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41VFNO6C4HL.jpg" alt="..." width="250" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg" alt="..." width="250" height="300" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://i0.wp.com/www.rankred.com/wp-content/uploads/2020/12/C-Programming.jpg?resize=338%2C400&ssl=1" alt="..." width="250" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pmem.io/images/programming_pmem_book_420x350px.png" alt="..." width="250" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41VFNO6C4HL.jpg" alt="..." width="250" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg" alt="..." width="250" height="300" />
          </SwiperSlide>

        </Swiper>
      </>
    </div>
  );
};

export default AllReviews;