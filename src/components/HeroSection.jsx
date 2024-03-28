/* eslint-disable react/prop-types */
import "../App.css";

export default function HeroSection({ about }) {
  console.log(about);
  return (
    <>
      <div className="flex items-center justify-evenly mt-3 flex-wrap-reverse">
        <div className=" flex gap-3 flex-col my-[150px] animate-pulse">
          <p className=" text-xl">Hello I'am</p>
          <h1 className=" text-5xl text-blue-600 font-bold">{about?.name}</h1>
          <h1 className=" text-2xl text-gray-400"> I am {about?.title}</h1>
          <h1 className=" italic">-{about?.quote}</h1>
        </div>
      </div>
      <div className=" flex items-center justify-evenly gap-5 flex-wrap mt-10">
        <div>
          <img
            src={about?.avatar?.url}
            alt={about?.name}
            className=" w-[300px] h-[300px] rounded-xl shadow-2xl p-3 bg-gray-700"
          />
        </div>
        <div className="w-[80%] md:w-[50%] flex gap-3 flex-col">
          <h1 className=" text-4xl font-bold text-blue-500">About</h1>
          <p className=" text-2xl text-gray-400">{about?.subTitle} </p>
          <p className=" text-xl ">{about?.description} </p>
        </div>
      </div>
    </>
  );
}
