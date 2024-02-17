import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../store/appSlice';

export default function ButtonList() {
    const buttonList=["All","Game","Live","Anime","DSA","Java","cricket","JavaScript","React","Music","Gaming","Mixes","Lectures","Recently uploaded","Watched","New to you"]
    const [active, setActive] = useState("All")
    const dispatch=useDispatch();
    const videoByTag=(item)=>{
      if(active!==item){
        dispatch(setCategory(item))
        setActive(item);
      }
    }
  return (
    <div className='flex hideScrollBar  overflow-y-hidden overflow-x-scroll gap-4'>
        {
         buttonList.map((item,index)=>{
            return <button onClick={()=>videoByTag(item)} key={index} className={`${active===item?"bg-slate-900 text-white":"hover:bg-gray-300"} bg-gray-200 font-semibold px-4 py-1 h-[32px]  rounded-lg  transition-all duration-200`}>{item}</button>
         })  
        }
        
    </div>
  )
}
