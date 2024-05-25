import React from 'react'
import googleplay from '../../assets/images/google-play.svg'
import applestore from '../../assets/images/apple-store.svg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { cardData } from '../../DataForPage/dummyData';
import star from '../../assets/images/star.svg'

function Cards() {
  const starList = [1,2,3,4,5];
  return (
    <div id='demo'>
      <div className='flex justify-center items-center'>
          <div className='w-1/2 flex justify-center items-center'>
            <img src={googleplay} alt="google play" />
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <img src={applestore} alt="apple store" />
          </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
        {cardData.map((item)=>{
          return(
            <div className='w-1/3 flex justify-center items-center'>
        <Card className="w-4/5 h-64 shadow-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.title}
        </Typography>
        <Typography>
          {item.text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mx-auto flex gap-2">
      {starList.map((index) => {
                      return (
                        <div key={index}>
                          {item.id === "1" ? (
                            <img src={star} alt="star"></img>
                          ) : (
                            <img src={star} alt="star"></img>
                          )}
                        </div>
                      );
                    })}
      </CardFooter>
    </Card>
        </div>
          );
        })}
      </div>
    </div>
  )
}

export default Cards