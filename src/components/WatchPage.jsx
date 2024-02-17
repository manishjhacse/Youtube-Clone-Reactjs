import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../constant/youtube";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { MdDownload } from "react-icons/md";
import dateFormat from "dateformat";
import { IoMdSend } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../store/chatSlice";
export default function WatchPage() {
  const [input, setInput] = useState();
  const [description, setDescription] = useState(false);
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const handleDescription = () => {
    setDescription(!description);
  };
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      //   console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Manish",
        message: input,
      })
    );
    setInput("")
  };
  return (
    <div className="flex w-[100%] mt-2">
      <div className="flex justify-between w-full px-6">
        <div>
          <iframe
            className="rounded-xl"
            width="900"
            height="475"
            src={`https://www.youtube.com/embed/${videoId}?si=QpoKmxscLPonKGYh&autoplay=1&mute=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="font-bold mt-2 text-lg w-[900px]">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex justify-between items-center w-[900px]">
            <div className="flex items-center justify-between w-[30%]">
              <div className="flex items-center">
                <img
                  className="h-10 w-12 rounded-full"
                  src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png"
                  alt=""
                />
                <div>
                  <h1 className="text-xl font-bold">
                    {singleVideo?.snippet?.channelTitle}
                  </h1>
                  <h2></h2>
                </div>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <BiLike size={20} />
                <p>{singleVideo?.statistics?.likeCount}</p>
                <div className="h-full ml-2 border-r border-black"></div>
                <BiDislike size={20} className="ml-3" />
              </div>
              <div className="flex gap-2 justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <PiShareFat size={20} />
                <p>Share</p>
              </div>
              <div className="flex gap-2 justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                {" "}
                <MdDownload size={20} />
                <p>Download</p>
              </div>
            </div>
          </div>
          <div
            className={`relative mt-4 w-[900px] flex flex-col items-start  bg-slate-300  overflow-hidden rounded-md px-4 py-2`}
          >
            <div className="flex gap-2">
              <p className="font-medium ">
                {singleVideo?.statistics?.viewCount}{" "}
                <span className="font-medium">Views</span>
              </p>
              <p>{dateFormat(singleVideo?.publishedAt, "dd mmm yyyy")}</p>
            </div>
            {description
              ? singleVideo?.snippet?.description
              : singleVideo?.snippet?.description.slice(0, 200) + "..."}
            <div className={`${description ? "block" : "hidden"}`}>
              <p>Tags:</p>
              <div className="flex flex-col">
                {singleVideo?.snippet?.tags.map((tag, index) => {
                  return <span key={index}>{`#${tag}`}</span>;
                })}
              </div>
            </div>
            <button onClick={handleDescription} className=" ">
              {description ? "show less" : "...more"}
            </button>
          </div>
        </div>

        <div className="w-[100%] max-w-[350px] border border-gray-300 ml-8 mt-1 rounded-lg h-fit p-2">
          <div className="flex items-center justify-between">
            Top Chat
            <HiDotsVertical />
          </div>
          <div className=" overflow-y-auto h-[28rem] flex flex-col-reverse ">
            <LiveChat />
          </div>
          <div className="flex items-center justify-center border-t py-2">
            <div className="flex items-center gap-1">
              <div className="">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png"
                  alt=""
                />
              </div>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="border-b border-b-gray-300 outline-none"
                type="text"
                placeholder="Send message..."
              />
              <div className="bg-gray-200 cursor-pointer p-2 rounded-full flex items-center justify-center">
                <button onClick={sendMessage}>
                  <IoMdSend size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
