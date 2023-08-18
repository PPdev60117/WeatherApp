import { ListEntity } from '../libs/type';
import { pickture } from '../libs/type';


export default function Onlyoneday(props:{data:ListEntity}) {

    const day = new Date(props.data.dt * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[day.getMonth()];
    const date = day.getDate();


    return(
        <>
           <div className='py-[10px] flex flex-row w-full justify-between'>
                <p className='dark:text-white'>{ date + month}</p>

                <div className='flex'>
                    <div className='dark:text-white'>
                        {pickture(props.data.weather![0].main,30)}
                    </div>
                    <h1 className='my-auto mx-2 dark:text-white'>
                        {props.data.weather![0].main}
                    </h1>
                </div>

                <p className='dark:text-white'>{Math.floor(props.data.main.temp_max-273)}°/{Math.floor(props.data.main.temp_min-273)}°</p>
            </div> 
        </>
    );
}
