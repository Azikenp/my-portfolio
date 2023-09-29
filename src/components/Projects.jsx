import React, { useState } from 'react'
import { data } from '../../data'
import Card from './Card'

const Projects = () => {

  return (
    <div className='py-[2rem] md:py-[1.82rem] px-[0.85rem] md:px-[2.85rem] lg:px-[3.85rem] border-b-[1px] border-[#f0f8ffe7] pb-24'> 
      <h3 className="text-[#dde5eb] text-[2.14rem] capitalize font-bold mb-16 text-center">My Projects</h3>
      <div className='flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-0 lg:gap-x-10'>
      {
        data.map((project, index) => {
          return(
            <Card key={index} data={project} />
          )
        })
      }
      </div>
    </div>
  )
}

export default Projects