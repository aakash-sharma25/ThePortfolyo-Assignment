import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    setData(data?.user?.social_handles);
    // await setSortedSkills(data?.skills?.sort((a, b) => a.sequence - b.sequence))
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" bg-gray-700 py-14 px-8 shadow-2xl text-white rounded-t-3xl">
      <div className=" flex flex-wrap items-center justify-center gap-10">
        {data?.map((d) => {
          return (
            d?.enabled && (
              <>
                {/* <p>{d?.platform} </p> */}
                <Link to={d?.url}>
                  <img
                    src={d?.image?.url}
                    alt={d?.platform}
                    className=" w-10 rounded-full hover:scale-110 cursor-pointer"
                  />
                </Link>
              </>
            )
          );
        })}
      </div>
      <p className=" text-xl text-gray-500 text-center mt-5">
        All right Reserved
      </p>
    </div>
  );
}
