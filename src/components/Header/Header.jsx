import React from 'react'
import { Switch } from "@material-tailwind/react";
import header1 from "../../assets/images/headerImage.png"

function Header() {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex w-4/5 justify-center items-center font-inter pt-16'>
            <div className='flex w-1/2 flex-col justify-center items-center'>
            <div>
            <Switch defaultChecked />
            <h1 className="sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">
            AxeL Brand new{" "}
            <br />
            <span
              className=
                 "sm:text-4xl text-dark text-6xl font-petitFormal font-bold"
              
            >
              Furniture
            </span>{" "}
            Mobile App
          </h1>
          <p
              className=
                  "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl mt-5"
            >
              Giving your home a propper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look what we offer
              with simple button click.
            </p>
            <div className="pb-20">
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </div>
            </div>
            </div>
            <div className='flex w-1/2 flex-col justify-center items-center'>
            <div>
            <h2
              className="sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
            >
              Modern Design
            </h2>
            <img src={header1} alt="header-image" className='h-[555px] bg-no-repeat bg-center relative z-10 header rounded-xl'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header