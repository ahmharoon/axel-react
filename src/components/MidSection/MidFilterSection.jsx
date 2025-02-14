import React, { useEffect, useState } from 'react'
import MidButton from './MidButton';
import { sliderData } from '../../DataForPage/dummyData';
import MidChild from './MidChild';
import { motion } from 'framer-motion';

function MidFilterSection() {
    const buttons = [
        {
          id: "1",
          name: "Room1",
        },
        {
          id: "2",
          name: "Room2",
        },
        {
          id: "3",
          name: "Room3",
        },
      ];
      const[selected,setSelected] = useState("1")
      const[click,setClick] = useState(false)
      const[data,setData] = useState([])
      const filterData = (button) => {
        const filter = sliderData.filter((item) => item.id === button);
        console.log(filter);
        setData(filter);
        setSelected(button);
        setClick(true);
      };
      useEffect(()=>{
        const putData = (data) => {
            setData(data.filter((item)=>item.id === '1'));
        }
        putData(sliderData)
      },[])
  return (
    <div className='font-inter mx-auto pt-72 pb-56'>
        <div
       
        className='flex justify-center items-center'>
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             variants={{
               visible: { opacity: 1, scale: 1 },
               hidden: { opacity: 0, scale: 0 },
             }}
            className='w-1/2 flex justify-center items-center'>
                <div className='w-4/5'>
                    <h2 className='text-6xl font-bold no-underline aligin-middle tracking-wide normal-case leading-none text-dark'>
                        Check out some of the news
                    </h2>
                    <div>
                        <MidButton 
                        buttons={buttons}
                        filter={filterData}
                        selected={selected}
                        ></MidButton>
                    </div>
                </div>
            </motion.div>
            <div className='w-1/2 flex justify-center items-center relative mx-auto rounded-xl drop-shadow-2xl'>
                <MidChild data={data} click={click}></MidChild>
            </div>
        </div>
    </div>
  )
}

export default MidFilterSection