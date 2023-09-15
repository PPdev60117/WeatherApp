'use client'
import Miniday from '../../components/Miniday'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Airquality from '../../components/Airquality';
import Sun from '../../components/Sun';
import Sevendays from '../../components/Sevendays';
import {useEffect,useState} from 'react'
import { Weather } from '../../libs/type';
import { Airpollution } from '../../libs/type';
import { useWindowSize } from '@/app/page';

export default function Page({ params }: { params: { slug: string } }) {

    const [sevenhour,setSevenhour] = useState<Weather | null>(null) 
    const [airpol,setAirpol] = useState<Airpollution | null |undefined>()
    const size = useWindowSize()

    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params.slug}&appid=${process.env.customKey}`)
      .then((res)=>res.json())
      .then((data:Weather)=>{setSevenhour(data)
      return(data)})
      .then((data:Weather)=>{return(data.city.coord)})
      .then((coord)=>fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.customKey}`))
      .then((data)=>data.json())
      .then((data:Airpollution)=>{setAirpol(data)})
      
    },[])
    
    return (
      <>
        <div className='w-[90%] mx-auto'>
          <Swiper
          className=''
          spaceBetween={5}
          slidesPerView={size.width<500 && size.width!==undefined?3:size.width<1200&& size.width!==undefined?5:7}
        >
          
          {sevenhour?.list?.map((num,number)=>{
            if(number < 7){
              return(<SwiperSlide key={number}><Miniday key={number} data={num} /></SwiperSlide>)
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
      </>
    )
}
