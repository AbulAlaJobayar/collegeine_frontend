import Container from "../../../Component/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../Home/HeroSection/styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const GallarySection = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://collegeine-backend.vercel.app/university")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <Container>
        <div className="mt-14 md:mt-28 ">
          <div className="mx-auto">
            <h1 className="text-neutral-700 mx-auto text-center max-w-md text-2xl sm:text-4xl md:text-5xl font-semibold">
              Graduation Gallery
            </h1>
            <p className="text-neutral-700 mx-auto text-center max-w-4xl text-base mt-3 md:mt-6">
              The college graduation gallery is a cherished collection of
              photographs capturing the momentous occasion of students
              completing their academic journey and receiving their degrees.
            </p>
          </div>
          {/* gallery */}
          <div className=" md:mt-12">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {datas.map((item) => (
                <SwiperSlide key={item._id}>
                    <img src={item.gllary} alt="" />
                    </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GallarySection;
