import React from 'react'
import { room } from '../../DataForPage/dummyData'

function MidComponentItem({title,text,img,reverse}) {
  return (
    <div className='company'>
        {reverse ? (<div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <div className='w-4/5 mx-auto'>
                    <h1 className='text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>{title}</h1>
                    <p className='text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>{text}</p>
                    <button className='pushable'><span className='front'>Start Now</span></button>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='h-[705px] pt-10 hover:rotate-6 duration-1000 cursor-pointer mx-auto' src={img} alt="img mid component" />
            </div>
        </div>)
        : (
            <div id='room'>
                <div className='flex justify-center items-center'>
                    <div className='w-1/2'>
                        <img className='h-[705px] pt-10 hover:rotate-[-6deg] duration-1000 cursor-pointer mx-auto' src={img} alt="img mid component 2"/>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">{title}</h1>
                            {room.map((item)=>{
                                return(
                                    <div className='flex justify-center items-center m-5'>
                                    <img className='h-16 w-16' src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        ) }
    </div>
  )
}

export default MidComponentItem