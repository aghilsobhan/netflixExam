import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Titles from "../Titles";
import { UserData } from "../../Data/MovieData";
function MovieCarts(props) {
  return (
    <div className="my-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
           autoplay={{ delay: 1000, disableOnInteraction: false }}
         //  loop={true}
          speed={1000}
        
           modules={[Autoplay]}
           spaceBetween={4}
           slidesPerView={4}
           breackpoints={{
            760: {
                slidesPerView:3,
            },
            1024: {
                slidesPerView: 5,
            },
           
          
          }}
          loop={true}
        >
          {UserData.map((user, i) => (
            <SwiperSlide key={i}>
              <div className="w-60 h-60 p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 ">
                <img
                  src={`/images/${user?.image}`}
                  alt={user.name}
                  className="w-full h-full object-cover rounded mb-2"
                />
                <p>{user.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCarts;
