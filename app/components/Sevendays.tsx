import { ListEntity } from '../libs/type';
import Onlyoneday from './Onlyoneday';

export default function Sevendays(props:{data:ListEntity[]}) {
  return (
    <>
        <div className='h-[384px] w-full p-5 flex flex-col bg-white rounded-2xl dark:bg-[#1E1E1E]'>
            <h1 className='mb-5 font-semibold dark:text-white'>
                5-Days Forcast
            </h1>
            
            <div className=' divide-y dark:text-white'>
                {props.data.map((data,num)=>{
                    if(num%8===0){
                        return(<Onlyoneday key={num} data={data}/>)
                    }
                })}
            </div>
        </div>
    </>
  )
}
