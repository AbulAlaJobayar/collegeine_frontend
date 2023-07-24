import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "../../../Component/Container";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const FeedbackSection = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://collegeine-backend.vercel.app/feedbackdata")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log({ datas });

  return (
    <>
      <Container>
        <div className="mt-14 md:mt-28 ">
          <div>
            <h1 className="text-4xl font-semibold text-neutral-700 ">
              About University!
            </h1>
            <hr className="w-72 border-2 mt-2 bg-[#ff6900] border-[#ff6900]"/>
          </div>

          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {datas.map((item) => (
                <SwiperSlide key={item._id}>
                  <div>
                    <h2 className="text-base">{item.feedback}</h2>
                    <div className="flex gap-4">
                      <img
                        src={item.img}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-left">
                        <h2 className="text-base capitalize font-semibold">{item.name}</h2>
                        <h2 className="text-base">{item.email}</h2>
                        <Rating style={{ maxWidth: 100 }} value={item.star}  />
                      </div>
                    </div>
                    
                  </div>

                  {/* <div className="card w-full bg-base-100 mx-5  pt-20">
                      <div className="card-body ">
                        <h2 className="card-title mb-5">
                          What a great store for the entire <br /> family! My
                          kids love this place <br /> because of the toys!
                        </h2>
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src="https://i.ibb.co/XCxDGQx/face-g8a8ddad52-640.jpg"
                              className="w-20 h-20 rounded-full"
                              alt=""
                            />
                          </div>
                          <div>
                            <h1 className="text-2xl font-bold text-[#181D4E]">
                              Mandy Mathers
                            </h1>
                            <p className="text-lg  text-[#373e7e]">
                              CEO, Business Co
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FeedbackSection;
