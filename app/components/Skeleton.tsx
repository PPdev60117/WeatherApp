import { Skeleton } from "@mui/material"


export function Cardweatherload(){
    return(
    <>
      <div className='w-[90%] mx-auto animate-pulse'>
        <div className='w-full grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 h-32 gap-3'>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl'></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl'></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl'></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl hidden md:block '></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl hidden md:block'></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl hidden lg:block'></div>
          <div className='bg-indigo-200 dark:bg-gray-700 rounded-xl hidden lg:block'></div> 
        </div>

        <div className='my-5 w-full h-full flex flex-col xl:flex-row'>
          <div className='w-auto xl:w-[65%] '>
            <div className='w-full h-44 bg-indigo-200 dark:bg-gray-700 rounded-xl mb-5'></div>
            <div className='w-full h-44 bg-indigo-200 dark:bg-gray-700 rounded-xl'></div>
          </div>

          

          <div className='w-full xl:ml-5 h-92 mt-5 xl:mt-0 bg-indigo-200 dark:bg-gray-700 rounded-xl'>
            
          </div>
        </div>
      </div>
    </>
    )
}

export function Right(){
    return(
        <div className="animate-pulse">
        <div className="w-3/4 mx-auto my-5">
            <Skeleton height={70}/>
        </div>
        <div className="w-3/4 h-[390px] dark:bg-gray-700 bg-gray-200 mx-auto rounded-xl"></div>
        <div className="w-3/4 mx-auto my-5 h-48 dark:bg-gray-700 rounded-xl bg-gray-200"></div>
      </div>
    )
}

export function Aircard(props:{head:string,value:number}){
  return(
  
      <div  className='rounded-md bg-emerald-100 w-12 text-xs py-4 flex flex-col dark:bg-slate-600'>
          <h1 className='mx-auto font-semibold dark:text-white'>{props.head}</h1>

          <p className='mx-auto font-medium dark:text-white'>{props.value}</p>
      </div>
);  
}