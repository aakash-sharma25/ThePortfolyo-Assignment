/* eslint-disable react/prop-types */
export default function Services({ services }) {
  return (
    <div>
      <h1 className="  text-4xl font-bold text-blue-500 text-center my-20">
        Services I Offer
      </h1>
      <div className=" flex items-center justify-center gap-8 flex-wrap mt-10">
        {services?.map((s) => {
          return (
            <div
              key={s?._id}
              className=" p-5 flex flex-col gap-5 items-center justify-center 
              bg-gray-600   w-[80%] md-[70%]  lg:w-[300px]  hover:scale-110 hover:transition-all hover:cursor-pointer rounded-3xl shadow-2xl duration-700"
            >
              <img
                src={s?.image?.url}
                width={60}
                className=" animate-bounce hover:scale-110 transition-all delay-500"
              />
              <p className=" text-white">{s.name} </p>
              <p className=" text-gray-300">{s.desc} </p>
              <p className=" text-gray-300 font-bold text-xl">
                Price - {s.charge}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
