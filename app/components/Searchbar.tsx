'use client'
import React, { useEffect, useState } from 'react'
import { useRouter  } from 'next/navigation'
import Image from 'next/image';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function Searchbar() {
    const router = useRouter()
    const [mode,setMode] = useState<string | null>('light')
    const [search,setSearch] = useState<string>('');


    const submitsearch = async (e:any) =>{
      await e.preventDefault()
      router.push(`/location/${search}`)
    }

    useEffect(()=>{
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setMode('dark');
      }
    },[])

    useEffect(()=>{
      if(mode === 'dark'){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }
    },[mode])

  return (
    <>
      <div className='flex justify-between mx-auto py-8 w-3/4'>
        <div className='flex flex-row bg-indigo-100 rounded-xl p-2 w-[65%]'>
          <div className='my-auto relative bg-transparent ml-1'>
            <div className='m-auto rounded-2xl border-[2px] border-indigo-400 p-[8px]'>

            </div>
            <div className='absolute -right-1 bottom-0 rounded-xl border-[2px] border-indigo-400 p-[1px]'>

            </div>
          </div>
          <form onSubmit={submitsearch}>
            <input type="" value={search} onChange={(e):void=>setSearch(e.target.value)} className='text-indigo-400 outline-0 placeholder:text-indigo-400 bg-transparent ml-4 w-full' placeholder='Search...'/>
          </form>
          <PlaceOutlinedIcon className='m-auto rounded-2xl mr-1 p-1  bg-white text-indigo-400 w-6 h-6 text-xs cursor-pointer' onClick={submitsearch}/>
        </div>

        <div className='flex my-auto'>
          <div className=''>
            {mode==='light'?<LightModeIcon className='text-3xl text-indigo-300 cursor-poiter my-auto' onClick={()=>{setMode(mode === 'light'?'dark':'light')}}/>:<DarkModeIcon className='text-3xl text-indigo-300 my-auto' onClick={()=>{setMode(mode === 'light'?'dark':'light')}}/>}
          </div>

          <div className='ml-3'>
            <Image alt='' width={35} height={35} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className='rounded-lg'/>
          </div>
        </div>

      </div>
    </>
  )
}
