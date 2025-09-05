import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects =[
    {
        name: "Vacations of Africa",
        year: "Mar 2022",
        align: "right",
        image: "../../public/images/project1.jpg",
        link: "#"
    },
    {
        name: "Moola App",
        year: "Jun 2023",
        align: "left",
        image: "../../public/images/project2.jpg",
        link: "#"
    },
    {
        name: "Tourzania",
        year: "Aug 2024",
        align: "right",
        image: "../../public/images/project3.jpg",
        link: "#"
    },
    {
        name: "Bank of Luck",
        year: "Jul 2025",
        align: "left",
        image: "../../public/images/project4.jpg",
        link: "#"
    },
];
const ProjectsMain = () => {
  return <div id="projects" className="max-w-[1200px] mx-auto px-4">
    <ProjectText/>
    <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
        })}
    </div>
  </div>;
};

export default ProjectsMain;
