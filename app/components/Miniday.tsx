import React from 'react'
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { Weather,ListEntity } from '../libs/type';
import {pickture} from '../libs/type'

export default function Miniday(props:{data:ListEntity }) {

  const main = props.data.weather?.map((data)=>{return(data.main)}) as string[] 

  return (
    <>
        <div className='font-semibold w-28 rounded-2xl py-4 text-slate-800 flex flex-col bg-white dark:bg-[#1E1E1E]'>
            <div className='mx-auto'>
                {pickture(main[0],60)}
            </div>

            <span className='mx-auto text-sm dark:text-white'>{(props.data.dt_txt).slice(10,16)}</span>
            <span className='mx-auto text-sm dark:text-white'>{Math.floor(Number(props.data.main.temp)-273)}°</span>    
        </div>
    </>
  )
}
