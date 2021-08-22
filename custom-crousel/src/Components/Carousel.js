import React, {useState} from 'react'
import './carousel.css'

import {images} from "./../Utils/CarouselData"
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
// import ArrowForwardIosIcon from '@material-ui/core/ArrowBackIos/ArrowForwardIosIcon'
function Carousel() {
    const [currImg, setCurrImg]=useState(0)
    const setNext=()=>{
        console.log("currImg value is: ", currImg)
        currImg===images.length-1?setCurrImg(0):setCurrImg(currImg+1)
    }
    // const setNext2=()=>{
    //     console.log("currImg value is: ", currImg)
    //     currImg===images.length-1?setCurrImg(0):setCurrImg(currImg+1)
    // }
    const setPrev=()=>{
        currImg===0?setCurrImg(images.length-1):setCurrImg(currImg-1)
    }
    React.useEffect(() => {
        const timer = setTimeout(() => {
          setNext();
        }, 5000);
        return () => {
          clearTimeout(timer);
        };
      }, [currImg]);

    // let value=setInterval(setNext2, 5000)
    return (
        <div className="carousel">
            <div className="carouselInner" 
            style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className="left" onClick={()=>setPrev()}>
                    <ArrowBackIosIcon style={{fontSize:30}}/>
                </div>
                
                <div className="center">
                    <h1>{images[currImg].title}</h1>
                    <p>{images[currImg].subtitle}</p>
                </div>
                <div className="right" onClick={()=>setNext()}>
                    <ArrowForwardIosIcon style={{fontSize:30}}/>
                </div>

            </div>
        </div>
    )
}

export default Carousel
