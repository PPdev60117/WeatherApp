import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {Weather } from '../libs/type';

export default function Sun(props:{data:Weather| null}) {
    const unix = (unix_timestamp:number):string=>{
        
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        const minutes = date.getMinutes();
        
        // Will display time in 10:30:23 format
        var formattedTime = `${(Number(hours)%12 >= 10)?`${hours%12}`:`0${hours%12}`}` + ':' + `${minutes>=10?`${minutes}`:`0${minutes}`}` + `${Number(hours)>12?'AM':'PM'}`
        return(formattedTime)
    }
    

  return (
    <>
        {props.data === undefined || null?<></>:<div className='p-5 bg-white rounded-2xl dark:bg-[#1E1E1E]'>
            <h1 className='mb-3 font-semibold dark:text-white'>Sunrise & Sunset</h1>

            <div className='bg-orange-100 p-3 rounded-xl dark:bg-[#303030]'>
                <div className='flex mb-2 dark:text-white'>
                    <PlaceOutlinedIcon className='text-[20px] dark:text-white'/>
                    <h1 className='my-auto text-sm dark:text-white'>{props.data!.city.name}</h1>
                </div>

                <div className='grid grid-cols-2 '>
                    <div className='flex'>
                        <LightModeOutlinedIcon className='my-auto text-4xl mr-2 dark:text-white'/>
                        <div>
                            <p className='text-sm dark:text-white'>Sunrise</p>
                            <h3 className='dark:text-white'>{unix(props.data!.city.sunrise)} </h3>
                        </div>
                    </div>

                    <div className='flex dark:text-white'>
                        <NightsStayOutlinedIcon className='my-auto text-4xl mr-2 dark:text-white'/>
                        <div >
                            <p className='text-sm dark:text-white'>Sunset</p>
                            <h3 className='dark:text-white'>{unix(props.data!.city.sunrise)} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>}


    </>
  )
}

