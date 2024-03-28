/* eslint-disable react/prop-types */

export default function Timeline({ timeLine }) {
  return (
    <>
      <main className=" mx-auto lg:w-[70%] md:w-[80%] my-[100px]">
        <div>
          <h1 className=" text-4xl text-center font-bold text-blue-500 my-10">
            Education
          </h1>
          {timeLine?.map((t, index) => {
            return (
              t?.forEducation && (
                <ol key={index} className="relative border-s border-white">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <p className="mb-1 text-sm font-normal  text-white">
                      {t?.company_name} , ( {t?.startDate} - {t?.endDate} )
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {t?.jobTitle} ,{" "}
                      <span className=" text-sm font-normal">
                        {t?.jobLocation}{" "}
                      </span>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {t?.summary}
                    </p>
                  </li>
                </ol>
              )
            );
          })}
        </div>

        <div>
          <h1 className=" text-4xl text-center font-bold text-blue-500 my-10">
            Work experience
          </h1>
          {timeLine?.map((t, index) => {
            return (
              !t?.forEducation && (
                <ol key={index} className="relative border-s border-white">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <p className="mb-1 text-sm font-normal  text-white">
                      {t?.company_name} , ( {t?.startDate} - {t?.endDate} )
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {t?.jobTitle} ,{" "}
                      <span className=" text-sm font-normal">
                        {t?.jobLocation}{" "}
                      </span>
                    </h3>
                    {t?.bulletPoints?.map((b) => {
                      return (
                        <p key={index} className="mb-4 text-sm text-gray-400">
                          {b !== "" && "-" + " " + b}
                        </p>
                      );
                    })}
                  </li>
                </ol>
              )
            );
          })}
        </div>
      </main>
    </>
  );
}
