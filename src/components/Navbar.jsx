export default function Navbar() {
  return (
    <div className=" hidden md:block pt-5 pb-5 bg-slate-700 rounded-3xl fixed my-3 lg:w-[80vw] md:w-[90vw] z-50">
      <div className=" flex items-center justify-center gap-10">
        <p className=" text-lg font-bold hover:cursor-pointer text-white hover:text-blue-500">
          About
        </p>
        <p className=" text-lg font-bold hover:cursor-pointer text-white hover:text-blue-500">
          Skills
        </p>
        <p className=" text-lg font-bold hover:cursor-pointer text-white hover:text-blue-500">
          Project
        </p>
        <p className=" text-lg font-bold hover:cursor-pointer text-white hover:text-blue-500">
          Testemonial
        </p>
        <p className=" text-lg font-bold hover:cursor-pointer text-white hover:text-blue-500">
          Services
        </p>
      </div>
    </div>
  );
}
