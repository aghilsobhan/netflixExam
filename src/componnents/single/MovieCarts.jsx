import { FaUserFriends } from "react-icons/fa";
import {Autoplay} from 'swiper';
import Swiper, { SwiperSlide }  from "swiper/react";
import Titles from "../Titles"
function MovieCarts(props) {
    return (
        <div className="my-12">
            <Titles  title="Casts" Icon={FaUserFriends}>
                <div className="mt-10">
                    <Swiper autoplay={{delay:1000,disableOnInteraction:false}}
                    loop={true}
                    speed={1000}
                    module={[Autoplay]}
                    spaceBetween={10}
                    breackpoints={{
                        0:{
                            slidesPerView:1,
                        },
                        400:{
                            slidesPerView:2,
                        },
                        768:{
                            slidesPerView:3,
                        },
                        1024:{
                            slidesPerView:4,
                        },
                        1280:{
                            slidesPerView:5,
                            spaceBetween:30,
                        },
                    }}>
                        {
                            UserData.map((user,i)=>(
                                <SwiperSlide key={i}>
                                    <div className="w-full p-3 italic text-xs "></div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>


            </Titles>
            
        </div>
    );
}

export default MovieCarts;