/* eslint-disable react/prop-types */

export default function Skills({ skills }) {
  return (
    <>
      <h1 className=" text-4xl text-blue-500 text-center my-20">Skills</h1>
      <div className=" flex items-center justify-center ">
        <div className=" flex gap-10 w-[70%] items-center justify-center flex-wrap">
          {skills?.map((s, index) => {
            return (
              s?.enabled && (
                <div
                  key={s?._id}
                  className={`hover:scale-125 hover:animate-none delay-${
                    index % 2 == 0 ? "500" : "300"
                  } animate-pulse hover:cursor-pointer`}
                >
                  <img width={100} src={s?.image?.url} />
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
