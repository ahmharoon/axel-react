import React from 'react'
import { motion } from 'framer-motion'

function MidChild({data, click}) {
return (
    <div className='w-full h-full'>
        {data.map((items)=>{
            return(
                
                <motion.div key={items.id} className='relative flex flex-col items-center justify-center'
                initial={{ scale: 0, opacity: 0 }}
                whileInView={ {scale:0.8,opacity : 1}}
                animate={{
                    y: click ? 20 : 0,
                    x: click ? 20 : 0,
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 1.5 }}
                >
                    <h1 className='text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4'>{items.title}</h1>
                    <p className='text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>{items.text}</p>
                    <div className='absolute -z-10'>
                        <motion.img 
                        className='w-full' 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: click ? "525px" : "525px", opacity: 1 }}
                        transition={{ type: "tween", duration: 3 }}
                        src={items.img} alt={items.img} ></motion.img>
                    </div>
                </motion.div>
            )
        })}
    </div>
)
}

export default MidChild