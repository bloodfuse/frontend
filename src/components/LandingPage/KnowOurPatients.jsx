import VideoCard from "./VideoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const KnowOurPatients = () => {
  const persons = [
    {
      // name: "Oluwole Seun",
      videoSrc: "",
      // details: "Meet 14 years old Seun from Lagos. She and others who are fighting Leukemia often need blood trans-fusions while going through chemo treatments.",
      details: "How to create an account on BloodFuse.",
      btnDescription: "Watch on Our Youtube",
      youtubeLink: "https://www.youtube.com/watch?v=1Vb6srw5bR8",
    },
    //     {
    //       name: "Audu Haruna",
    //       videoSrc: "",
    //       details:
    //         "Meet 28 years old Haruna from Kano, who is fighting Cancer often need blood trans-fusions while going through chemo treatments.",
    //       btnDescription: "Watch on Our Youtube",
    //       youtubeLink: "https://www.youtube.com/embed/fehAgOqTR44",
    //     },
  ];
  return (
    <section className="w-full pb-6 md:pb-14 h-auto">
      <h1 className="text-2xl md:text-3xl text-center pb-16 px-2 font-bold hidden sm:block ">
        How to create an account on Bloodfuse
      </h1>
      {/* <h1 className="text-2xl md:text-3xl text-center py-12 px-2 font-bold block sm:hidden"> */}
      {/* GET TO KNOW OUR PATIENTS */}
      {/* </h1> */}
      {/* The Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        navigation={persons > 1 ? !0 : !1}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >
        {persons.map((person, index) => (
          <SwiperSlide key={index}>
            <VideoCard person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default KnowOurPatients;
