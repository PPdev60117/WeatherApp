'use client'
import Miniday from './components/Miniday'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Airquality from './components/Airquality';
import Sun from './components/Sun';
import Sevendays from './components/Sevendays';
import {useEffect,useState} from 'react'
import { Weather } from './libs/type';
import { Airpollution } from './libs/type';
import {Cardweatherload} from './components/Skeleton';

interface size {
  width : number,
  height: number
}

export default function Home() {

  const [sevenhour,setSevenhour] = useState<Weather | null>(null) 
  const [airpol,setAirpol] = useState<Airpollution | null |undefined>()
  const [lood,setlood] = useState<boolean>(true)
  const size = useWindowSize() as size
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.customKey}`)
    .then((res)=>res.json())
    .then((data:Weather)=>{setSevenhour(data)
    return(data)})
    .then((data:Weather)=>{return(data.city.coord)})
    .then((coord)=>fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.customKey}`))
    .then((data)=>data.json())
    .then((data:Airpollution)=>{setAirpol(data)
    setlood(false)})
    .catch((err)=>{
      setlood(true);
      alert(err)})
  },[])



  return (
    <>
      {lood && <Cardweatherload/>}
      {!lood&&<div className='w-[90%] mx-auto'>
        <Swiper
        className=''
        spaceBetween={5}
        slidesPerView={size.width<500?3:size.width<1200?5:7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {sevenhour?.list?.map((num,number)=>{
          if(number < 7){
            return(<SwiperSlide key={number}><Miniday key={number} data={num}/></SwiperSlide>)
          }
        })}
      </Swiper>

        <div className='my-5 w-full flex flex-col xl:flex-row'>
          <div className='w-auto xl:w-[65%] '>
            <Airquality data={airpol}/>
            {sevenhour !== null||undefined? <Sun data={sevenhour}/>:<></>}
          </div>

          <div className='w-full xl:mx-5 h-full mt-5 xl:mt-0'>
            {sevenhour !== null||undefined ?<Sevendays data={sevenhour!.list!}/>:<></>}
          </div>
        </div>
      </div>
}
    </>
  )
}


export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}