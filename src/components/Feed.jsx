import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

export default function Feed() {
    const open=useSelector((store)=>store.app.open);
  return (
    <div className={`md:mx-5 px-3 md:px-0 pt-5 w-full  ${open?"md:w-[calc(100vw-240px)]":"md:w-[calc(100vw-90px)]"}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}
