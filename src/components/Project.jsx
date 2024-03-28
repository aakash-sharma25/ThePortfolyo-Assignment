import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Project({ projects }) {
  // console.log(projects)
  const navigate = useNavigate();
  return (
    <>
      <h1 className="  text-4xl font-bold text-blue-500 text-center my-10">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projects?.map((p, index) => {
          return (
            <>
              <div
                key={index}
                className=" w-[80%] md-[70%]  lg:w-[300px] rounded-lg p-4 shadow-xl bg-gray-600 flex flex-col gap-4 hover:scale-110 hover:cursor-pointer  duration-700"
              >
                <img src={p?.image?.url} alt="project image" width={"90%"} />
                <p className=" text-center text-xl">{p?.title}</p>
                <p>{p?.description} </p>
                <button
                  onClick={() => navigate(`/project/${p?._id}`)}
                  className=" px-1 py-3 bg-blue-500 hover:bg-blue-700"
                >
                  Learn More
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
