import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Services from "./Services";
import Timeline from "./Timeline";
import Project from "./Project";
import Testemonial from "./Testemonial";
import Contact from "./Contact";
import axios from "axios";

export default function Homepage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    setData(data?.user);
    // await setSortedSkills(data?.skills?.sort((a, b) => a.sequence - b.sequence))
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <HeroSection about={data?.about} />
      <Skills skills={data?.skills} />
      <Services services={data?.services} />
      <Timeline timeLine={data?.timeline} />
      <Project projects={data?.projects} />
      <Testemonial testimonials={data?.testimonials} />
      <Contact about={data?.about} />
    </div>
  );
}
