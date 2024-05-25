import React from 'react'

function WrapperContainer({navHead ,children}) {
  return (
    <div className={!navHead ? "bg-wrapperBg rounded-lg drop-shadow-lg container mx-auto h-full w-full bg-cover bg-no-repeat bg-center" 
    : "container mx-auto px-4" }>{children}</div>
  )
}

export default WrapperContainer