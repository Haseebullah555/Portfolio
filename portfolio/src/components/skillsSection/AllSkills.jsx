import React from "react";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux  } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5
  },
  {
    skill: "CSS",
    icon: FaCss3Alt
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript
  },
  {
    skill: "TypeScript",
    icon: SiTypescript
  },
  {
    skill: "ReactJS",
    icon: FaReact
  },
  {
    skill: "Redux",
    icon: SiRedux
  },
  {
    skill: "NextJS",
    icon: RiNextjsFill
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill
  },
]
const AllSkills = () => {
  return <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    {skills.map((item, index)=>{
      return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
})}
  </div>;
};

export default AllSkills;
