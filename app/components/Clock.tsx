'use client'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

export default function Clock() {
    const [time,setTime] = useState<string>()
    const [param,setParam] = useState<string>('')
    const [date,setDate] = useState<string>()
    const [morning,setMorning] = useState<string>()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const params = useParams()
    useEffect(()=>{
        const date = new Date();
        
        setInterval(()=>{
            const date = new Date();
            setTime(`${(Number(date.getHours())%12 >= 10)?`${date.getHours()%12}`:`0${date.getHours()%12}`}:${Number(date.getMinutes())>= 10?`${date.getMinutes()}`:`0${date.getMinutes()}`} ${Number(date.getHours)>12?'AM':'PM'}`);
            setMorning(`${Number(date.getHours)>5?'Good Morning':Number(date.getHours)<12?'Good Afternoon':'Good Evening'}`)
        },1000)

        setDate(`${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} , ${date.getFullYear()}`)
        
    },[])

    useEffect(()=>{
        {params.slug !== undefined||null?setParam(String(params.slug)):setParam('Bangkok')}
    },[params])

  return (
    <>
        <div className='my-8 w-[90%] mx-auto font-semibold text-indigo-500'>
            <div className='text-5xl mb-1'>
                {time}
            </div>
            
            <div className='text-slate-800 mb-3'>
                {date}
            </div>
            
            <div className='text-2xl'>
                {morning!=='Good Evening'?<LightModeOutlinedIcon className='mr-2 text-3xl'/>:<NightsStayOutlinedIcon className='mr-2 text-3xl'/>}
                <span className='my-auto'>{morning},{param===''?`Bangkok!`:` ${param}!`} </span>
            </div>
        </div>
    </>
  )
}
