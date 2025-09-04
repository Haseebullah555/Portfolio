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
const AllSkillsSM = () => {
  return <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {skills.map((item, index)=>{
        return <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange"/>
            <p className="text-center mt-4 text-white">{item.skill}</p>
            </div>
    })}
  </div>;
};

export default AllSkillsSM;
