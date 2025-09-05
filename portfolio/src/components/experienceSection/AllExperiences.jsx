import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - present",
    responsibilities: [
      "Implementing reusable components",
      "Participating in large scale application.",
      "Working on the performance of web application.",
      "Generating new ideas for better user experience"
    ]
  },
  {
    job: "Course Instructor",
    company: "EIA Educational Complex",
    date: "2021 - 2022",
    responsibilities: [
      "Explaining and facilitating web development concepts",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey."
    ]
  },
  {
    job: "Course Instructor",
    company: "EIA Educational Complex",
    date: "2021 - present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies."
    ]
  }
];
const AllExperiences = () => {
  return (
  <div className='flex md:flex-row sm:flex-col items-center justify-between'>
    {experiences.map((experience, index)=>{
      return <>
      <SingleExperience key={index} experience={experience}/>
      {index < 2 ? (<FaArrowRight className='text-6xl text-orange md:block sm:hidden'/>) : ('')}
      </>
    })}
  </div>
  )
}

export default AllExperiences