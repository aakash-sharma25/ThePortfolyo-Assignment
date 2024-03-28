/* eslint-disable react/prop-types */
import Slider from "react-slick";

export default function Testemonial({ testimonials }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className=" text-center mt-16">
      {/* <div> */}
      {testimonials?.map((t, index) => {
        return (
          <div key={index} className=" text-white  w-[300px] ">
            <div className=" flex flex-col items-center justify-center">
              <img className=" w-[10%] rounded-full" src={t?.image?.url} />
              <p className=" text-sm italic w-[80%]">
                <span>{t?.name} ,</span>
                <span>{t?.position} </span>
              </p>
              <p className="text-sm text-gray-400">{t?.review} </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
