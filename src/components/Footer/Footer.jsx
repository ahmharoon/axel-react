import React from 'react'
import logo from '../../assets/images/logo.svg'
import googleplay from '../../assets/images/google-play.svg'
import applestore from '../../assets/images/apple-store.svg'
import { FooterData1 } from '../../DataForPage/dummyData'
import { FooterData2 } from '../../DataForPage/dummyData'
import { FooterData3 } from '../../DataForPage/dummyData'


function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='font-inter translate-y-32 pt-10 w-full pb-10'>
        <div className='w-3/5 flex justify-center mx-auto'>
            <div className='w-1/4 flex flex-col gap-5'>
                <img className='w-32' src={logo} alt="Logo" />
                <img className='w-32' src={googleplay} alt="googleplay" />
                <img className='w-32' src={applestore} alt="applestore" />
            </div>
            <div className='w-1/4 flex flex-col'>
                <h1 className='font-bold text-xl'>Features</h1>
                {FooterData1.map((item)=><div>
                    <p>{item.text}</p>
                </div>)}
            </div>
            <div className='w-1/4 flex flex-col'>
            <h1 className='font-bold text-xl'>Features</h1>
                {FooterData2.map((item)=><div>
                    <p>{item.text}</p>
                </div>)}
            </div>
            <div className='w-1/4 flex flex-col'>
            <h1 className='font-bold text-xl'>Features</h1>
                {FooterData3.map((item)=><div>
                    <p>{item.text}</p>
                </div>)}
            </div>
        </div>
            <div>
                <hr className='w-4/5 m-10 mx-auto' />
            </div>
            <div className='flex justify-between w-4/5 mx-auto'>
                <div className=' font-bold text-xl'>
                    <p>Axel</p>
                </div>
                <div>
                    Copyright &#169; {year} page by Ahmad Haroon
                </div>
            </div>
    </div>
  )
}

export default Footer