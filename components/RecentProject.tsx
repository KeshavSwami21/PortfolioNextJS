"use client";
import dynamic from "next/dynamic";
/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'

const PinContainer = dynamic(() => import('./ui/3d-pin').then(mod => mod.PinContainer), { ssr: false });


const RecentProject = () => {
  return (
    <div className="py-20" id='projects'>
        <h1 className='heading'>
            A Small Selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center  w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[30vh] h-[20vh] mb-10 rounded-lg'>
                                <img src={img} alt={title}/>
                        </div>
                        <h1 className='font-bold lg:tex-2xl md:text-xl tex-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div className="border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{transform: `translateX(-${5 * index *2}px)`}} key={icon}>
                                        <img src={icon} alt={icon} className='p-2 ml-2'/>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Visit Repo</p>
                                <FaLocationArrow className='ms-3 color="#CBACF9"' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject