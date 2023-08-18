'use client'
import Searchbar from '../components/Searchbar'
import Cardweather from '../components/Cardweather'
import Minicrad from '../components/Minicrad'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Right } from '../components/Skeleton'
export interface Weathercurrent {
  coord: Coord;
  weather?: (WeatherEntity)[] | null;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export default function page() {
  const params = useParams()
  const [load,setLoad] = useState<boolean>(true)
  const [data,setData] = useState<Weathercurrent>()
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.slug===undefined?'Bangkok':`${params.slug}`}&appid=${process.env.customKey}`)
    .then((res)=>res.json())
    .then((data:Weathercurrent)=>{setData(data)
    setLoad(false)})
  },[params])

  return (
    <>
      {load&&<Right/>}
      {!load&&
      <div>
      <Searchbar />
      <Cardweather currentdata={data}/>
      <Minicrad color={'bg-gradient-to-l from-[#fe1d91] to-[#ff7bbf] '} currentdata={data}/>  
      </div>}
    </>
  )
}
