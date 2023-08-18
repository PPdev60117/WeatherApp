import Image from "next/image";
import Clouds from '../../public/clouds.png'
import Rain from '../../public/rain.png'
import Clear from '../../public/clear.png'
import Mist from '../../public/mist.png'
import Dizzle from '../../public/drizzle.png'
import Snow from '../../public/snow.png'


export interface Weather {
    cod: string;
    message: number;
    cnt: number;
    list?: (ListEntity)[] | null;
    city: City;
  }
  export interface ListEntity {
    dt: number;
    main: Main;
    weather?: (WeatherEntity)[] | null |undefined;
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
    rain?: Rain | null;
  }
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
  export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  export interface Clouds {
    all: number;
  }
  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
  export interface Sys {
    pod: string;
  }
  export interface Rain {
    '3h': number;
  }
  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  export interface Coord {
    lat: number;
    lon: number;
  }

  export interface Airpollution {
    coord: Coord;
    list?: (ListEntity1)[] | null;
  }
  export interface Coord {
    lon: number;
    lat: number;
  }
  export interface ListEntity1 {
    main: Main;
    components: Components;
    dt: number;
  }
  export interface Main {
    aqi: number;
  }
  export interface Components {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  }
  
  

export function pickture(weather:any,lenght:number) {
    if(weather === 'Mist'){
        console.log('mist')
        return(<Image width={lenght} height={lenght} className='mx-auto' alt='' src={Mist}/>)
    }
    else if(weather === 'Rain'){
        return(<Image width={lenght} height={lenght} className='mx-auto' alt='' src={Rain}/>)
    }
    else if(weather === 'Drizzle'){
        return(<Image width={lenght} height={lenght} className='mx-auto' alt='' src={Dizzle}/>)
    }
    else if(weather === 'Clouds'){
        return(<Image width={lenght} height={lenght} className='mx-auto'  alt='' src={Clouds}/>)
    }
    else if(weather === 'Snow'){
        return(<Image width={lenght} height={lenght} className='mx-auto' alt='' src={Snow}/>)
    }
    else if(weather === 'Clear'){
        return(<Image width={lenght} height={lenght} className='mx-auto' alt='' src={Clear}/>)
    }
    else if(weather === null || undefined){
        return(<></>);
    }
}