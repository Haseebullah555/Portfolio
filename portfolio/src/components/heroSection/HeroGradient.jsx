import React from 'react'

function HeroGradient() {
  return (
    <div>
      <div className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
      <div className='shadow-cyanMediumShadow absolute top-[80px] left-0 -z-10 animate-pulse opacity-50'></div>
      <div className='shadow-orangeMediumShadow absolute top-[260px] left-0 -z-10 animate-pulse opacity-50'></div>
    </div>
  )
}

export default HeroGradient