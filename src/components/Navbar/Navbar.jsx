import React,{useState,useEffect} from 'react'
import { navbarData } from '../../DataForPage/dummyData'
import {Link} from 'react-scroll'
import logo from '../../assets/images/logo.svg'


function Navbar() {
    const [scroll,setScroll] = useState(false);
    const handleScroll = ()=>{
        if (window.scrollY>50) {
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(
        ()=>{
            window.addEventListener('scroll',handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
              };
        }
        ,[scroll]
    )
  return (
    <div>
        <div className={scroll ?  "h-16 w-full fixed flex transition justify-center items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20" : "bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex justify-center items-center z-20"}>
            <div className='fixed flex justify-between w-4/5 p-5 font-inter'>
                <div>
                    <img className='h-10' src={logo} alt="Logo Img" />
                </div>
                <div className='flex gap-5 text-dark'>
                    {navbarData.map((items)=>{
                        return(
                        <div key={items.id}>
                            <Link 
                            to={items.link}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offse={50}
                            duration={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                            className='hover:text-blue-500 cursor-pointer font-inter text-dark font-medium tracking-tighter'
                            >{items.name}</Link>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

