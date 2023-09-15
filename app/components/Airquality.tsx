import React from 'react'
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import { Airpollution} from '../libs/type';
import { Aircard } from './Skeleton';
import 'swiper/css';

export default function Airquality(props:{data:Airpollution | null |undefined}) {

    const qality = [['Good','A perfect day for walk'],['Fair','there may be a risk for some people'],['Moderate','Members of sensitive groups may experience health effects'],['Poor','Some members of the general public may experience health effects'],['Very Poor',' The risk of health effects is increased for everyone']]

  return (
    <>
        {props.data === undefined || null?<></>:<div className='dark:bg-[#1E1E1E] mb-5 bg-white w-full mr-5 p-5 rounded-2xl'>
            <div>
                <h1 className='font-semibold dark:text-white'>Air Quality Index</h1>
            </div>

            <div className='my-3 flex'>
                <div className='my-auto '>
                    <AirRoundedIcon className='text-4xl '/>
                </div>

                <div>
                    <p className='text-sm font-semibold dark:text-white'>
                       {props.data?.list?.map((data)=>{
                        return(`${qality[data.main.aqi][0]}`)
                       })}
                    </p>


                    <p className='text-[10px] font-medium dark:text-slate-400'>
                    {props.data?.list?.map((data)=>{
                        return(`${qality[data.main.aqi][1]}`)
                       })}
                    </p>
                </div>
            </div>

            <div className='flex w-full gap-3 overflow-hidden'>
                
                {Object.keys(props.data!.list!.at(0)!.components).map((key:string,num:number)=>{
                const data = Object.values(props.data!.list!.at(0)!.components)
                return(<Aircard key={num} head = {key} value={data[num]}/>)
                })}

            </div>
        </div>}
    </>
  )
}


