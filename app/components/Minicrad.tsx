'use client'
import AirRoundedIcon from '@mui/icons-material/AirRounded';


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
export default function Minicrad(props:{color:string,currentdata:Weathercurrent|undefined}) {

  const direction = ['N','NE','E','SE','S','SW','W','NW']

  function direct (num:number):number{
    return(num < 45?0:num<90?1:num<135?2:num<180?3:num<225?4:num<270?5:num<315?6:7)

  }

  return (
    <>  
        {props.currentdata === undefined || null?<></>:
        <div className={`flex flex-col text-white w-3/4 mx-auto flex ${props.color} rounded-xl my-5 p-5 h-[200px] dark:bg-[#121212]`}>
            <div className='flex'>
                <AirRoundedIcon className='my-auto mr-2'/>
                <h1>Wind Direction</h1>
            </div>
            <div className='relative outline outline-offset-2 outline-8 flex text-xs flex-col rounded-full w-28 h-28 m-auto align-center'>
                <div className='flex flex-col m-auto'>
                  <h1 className='m-auto text-5xl font-bold'>{direction[direct(props.currentdata.wind.deg)]}</h1>
                  <p className='mx-auto'>{props.currentdata.wind.speed} Knot</p>
                </div>
                <div className={`absolute w-full h-full top-0 left-0 arrow ${(direction[direct(props.currentdata.wind.deg)]).toLowerCase()}`}></div>
            </div>
        </div>}
    </>
  )
}
