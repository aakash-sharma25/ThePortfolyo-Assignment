import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Project({ projects }) {
  const [projectArray, setProjectArray] = useState(projects);
  // console.log(projects)
  const navigate = useNavigate();
  const setter = (tech) => {
    if (tech === "ALL") {
      setProjectArray(projects);
      return;
    }
    let filteredProjects = projects.filter((project) => {
      const trimmedTechStack = project.techStack.map((tech) => tech.trim());
      return trimmedTechStack.includes(tech.trim());
    });
    setProjectArray(filteredProjects);
  };
  useEffect(() => {
    setProjectArray(projects);
  }, [projects]);
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 text-center my-10">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-evenly my-5 py-3 gap-5">
        <button
          onClick={() => setter("ALL")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          All
        </button>
        <button
          onClick={() => setter("Reactjs")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          Reactjs
        </button>
        <button
          onClick={() => setter("Nextjs")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          Nextjs
        </button>
        <button
          onClick={() => setter("CSS")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          CSS
        </button>
        <button
          onClick={() => setter("Mern")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          Mern
        </button>
        <button
          onClick={() => setter("TailwindCSS")}
          className=" py-2 px-4 bg-blue-600 hover:bg-blue-800 hover:text-white shadow-2xl rounded-lg"
        >
          TailwindCSS
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projectArray?.map((p, index) => {
          return (
            <div
              key={index + index}
            >
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
            </div>
          );
        })}
      </div>
    </>
  );
}
