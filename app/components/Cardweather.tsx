'use client'
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import {pickture} from '../libs/type'

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

export default function  Cardweather(props:{currentdata:Weathercurrent | undefined}) {
    
const date = new Date;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <>
        {props.currentdata === undefined || null?<></>:<div className='overflow-hidden px-8 py-8 bg-gradient-to-t from-indigo-500 to-indigo-300 w-3/4 mx-auto rounded-xl text-white relative dark:bg-[#121212]'>
            <div className='z-30 -top-5 -right-5 w-20 h-20 absolute bg-yellow-300 rounded-full '></div>
            <div className='z-20 w-28 h-28 -top-9 -right-9 absolute bg-slate-100/[.3] rounded-full'></div>
            <div className='z-20 w-36 h-36 -top-[48px] -right-[48px] absolute bg-slate-50/[.2] rounded-full'></div>
            <div className='flex relative'>
                <PlaceOutlinedIcon/>
                <h1>{props.currentdata.name}</h1>
                
            </div>

            <div className='flex flex-col'>
                {pickture(props.currentdata!.weather![0].main,100)}
                <span className='my-2 mx-auto text-sm'>Today,{date.getDate()} {month[date.getMonth()]}</span>
                <div className='mb-4 mx-auto relative text-7xl font-semibold'>
                    <h1>
                        {Math.floor(Number(props.currentdata!.main.temp)-273)}
                    </h1>
                    <div className='absolute  rounded-full border-[6px] p-1 border-white top-0 -right-4'></div>
                </div>

                <span className='mx-auto mb-3'>{props.currentdata!.weather![0].main}</span>
                <div className='flex text-xs flex-col mx-auto justify-center align-center'>
                    <div className='grid grid-cols-2 divide-x-2 w-48'>
                        <div className=' ml-auto mr-3'>
                            <AirRoundedIcon className='my-auto mr-1'/>
                            <span className='my-auto '>Wind</span>
                        </div>
                        <div className='my-auto  '>
                            <div className='ml-3 flex flex-row'>
                                <span className='mr-1'>{props.currentdata!.wind.speed} </span>
                                <span>Knot</span>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 divide-x-2 w-48'>
                        <div className=' mr-3 ml-auto'>
                            <WaterDropOutlinedIcon className='my-auto mr-1'/>
                            <span className='my-auto '>Hum</span>
                        </div>
                        <div className='my-auto '>
                            <span className='ml-3'>{props.currentdata!.main.humidity} %</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </>
  )
}

