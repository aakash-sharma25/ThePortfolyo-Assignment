import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProjectDetails from "./components/ProjectDetails";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project/:id" element={<ProjectDetails/>} />
      </Routes>
    </>
    // <div>
    //   <Navbar />
    //   <HeroSection about={data?.about} />
    //   <Skills skills={data?.skills} />
    //   <Services services={data?.services} />
    //   <Timeline timeLine={data?.timeline}/>
    //   <Project projects={data?.projects}/>
    //   <Testemonial testimonials={data?.timeline} />
    //   <Contact about={data?.about} />
    // </div>
  );
}

export default App;
