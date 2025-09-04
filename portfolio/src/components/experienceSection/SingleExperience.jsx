import React from 'react'

const SingleExperience = ({experience}) => {
  return (
    <div className='flex flex-col items-start md:h-[350px] md:w-[280px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilities.map((res, index)=>{
          return <li key={index} className=''>{res}</li>
      })}</ul>
    </div>
  )
}

export default SingleExperience