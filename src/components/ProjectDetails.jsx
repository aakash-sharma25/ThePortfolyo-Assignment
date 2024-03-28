import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  // console.log(id)

  const [project, setProject] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    //   setProject(data?.user?.projects);
    const allProject = data?.user?.projects;
    setProject(allProject.find((project) => project._id === id));
  };

  useEffect(() => {
    fetchData();
    //   console.log(project)
  }, []);
  return (
    <div className="mx-auto w-[90vw] flex items-center justify-center">
      <div className=" lg:w-[60%] md:w-[80%] rounded shadow-lg  mt-[150px]">
        <img
          className=" w-[90%] hover:cursor-pointer"
          src={project?.image?.url}
          alt={project?.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{project?.title} </div>
          <p className="text-white">{project?.description}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {project?.techStack?.map((t, index) => {
            return (
              <span
                key={index}
                className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold 
                text-blue-500 mr-2 mb-2 hover:cursor-pointer"
              >
                {t}
              </span>
            );
          })}
          <div className=" flex items-center gap-5 my-3">
            <Link
              to={project?.githuburl}
              className=" py-2 px-2 bg-blue-500 hover:bg-blue-700 rounded-xl "
            >
              Github
            </Link>
            <Link
              to={project?.liveurl}
              className=" py-2 px-2 bg-blue-500 hover:bg-blue-700 rounded-xl "
            >
              Live Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
