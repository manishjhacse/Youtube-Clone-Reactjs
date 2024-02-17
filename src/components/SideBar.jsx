import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiFrameCorners } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosMusicalNote } from "react-icons/io";
import { PiFilmSlate } from "react-icons/pi";
import { BsBroadcast } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { CiTrophy } from "react-icons/ci";
import { PiLightbulbFilament } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbFlag } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
export default function SideBar() {
const sideBarItems=[
    {
        icons:<GoHome  size={"24px"}/>,
        title:"Home"
    },
    {
        icons:<SiYoutubeshorts  size={"24px"}/>,
        title:"Shorts"
    },
    {
        icons:<MdOutlineSubscriptions  size={"24px"}/>,
        title:"Subscription"
    },
]
const SideBarYouItems=[
    {
        icons:<PiFrameCorners  size={"24px"}/>,
        title:"Your Channel"
    },
    {
        icons:<MdHistory  size={"24px"}/>,
        title:"History"
    },
    {
        icons:<GoVideo  size={"24px"}/>,
        title:"Your Videos"
    },
    {
        icons:<MdOutlineWatchLater  size={"24px"}/>,
        title:"Watch Later"
    },
]
const exloreItems=[
    {
        icons:<FaFireAlt  size={"24px"}/>,
        title:"Trending"
    },
    {
        icons:<AiOutlineShopping  size={"24px"}/>,
        title:"Shooping"
    },
    {
        icons:<IoIosMusicalNote  size={"24px"}/>,
        title:"Music"
    },
    {
        icons:<PiFilmSlate  size={"24px"}/>,
        title:"Films"
    },
    {
        icons:<BsBroadcast  size={"24px"}/>,
        title:"Live"
    },
    {
        icons:<SiYoutubegaming size={"24px"}/>,
        title:"Gaming"
    },
    {
        icons:<ImNewspaper  size={"24px"}/>,
        title:"News"
    },
    {
        icons:<CiTrophy  size={"24px"}/>,
        title:"Sport"
    },
    {
        icons:<PiLightbulbFilament  size={"24px"}/>,
        title:"Learning"
    },
    {
        icons:<GiHanger  size={"24px"}/>,
        title:"Fashion & beauty"
    },
    {
        icons:<MdOutlinePodcasts  size={"24px"}/>,
        title:"Podcasts"
    },
]
const settingItems=[
    {
        icons:<IoSettingsOutline  size={"24px"}/>,
        title:"Settings"
    },
    {
        icons:<TbFlag  size={"24px"}/>,
        title:"Report history"
    },
    {
        icons:<MdHelpOutline  size={"24px"}/>,
        title:"Help"
    },
    {
        icons:<RiFeedbackLine  size={"24px"}/>,
        title:"Send feedback"
    },
]
const open=useSelector((store)=>store.app.open);

  return (
    <div className={`${open?"":"w-[70px]"} px-2 overflow-y-scroll overflow-x-hidden h-[calc(100vh-66px)] w-[240px] hidden md:block relative left-0 bg-white`}>
       <div>
       {
            sideBarItems.map((item,index)=>{
               return <div key={index} className='flex my-4 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-200 rounded-lg px-2 py-1'>
                {item.icons}
                <p className={`${open?"block":"hidden"}`}>{item.title}</p>
                </div>
            })
        }
        </div>
        <hr className={`${open?"block":"hidden"}`} />
        <div className={`${open?"block":"hidden"}`}>
            <h1 className='flex items-center text-xl px-2 gap-2'>You <MdOutlineKeyboardArrowRight /></h1>
            {
            SideBarYouItems.map((item,index)=>{
               return <div key={index} className='flex my-4 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-200 rounded-lg px-2 py-1'>
                {item.icons}
                <p>{item.title}</p>
                </div>
            })
        }
        </div>
        <hr className={`${open?"block":"hidden"}`} />
        <div className={`${open?"block":"hidden"}`}>
            <h1 className='flex items-center text-xl px-2 gap-2'>Explore</h1>
            {
            exloreItems.map((item,index)=>{
               return <div key={index} className='flex my-4 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-200 rounded-lg px-2 py-1'>
                {item.icons}
                <p>{item.title}</p>
                </div>
            })
        }
        </div>
        <hr className={`${open?"block":"hidden"}`} />
        <div className={`${open?"block":"hidden"}`}>
            {
            settingItems.map((item,index)=>{
               return <div key={index} className='flex my-4 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-200 rounded-lg px-2 py-1'>
                {item.icons}
                <p>{item.title}</p>
                </div>
            })
        }
        </div>
        <hr className={`${open?"block":"hidden"}`} />
        <div className={`${open?"block":"hidden"} flex flex-col gap-3 text-xs`} >
            <p className='w-[150px]'>About Press Copyright Contact us Creator Advertise Developers</p>
            <p className='w-[150px]'>Terms Privacy Policy & Safety How YouTube works Test new features</p>
        </div>

    </div>
  )
}
