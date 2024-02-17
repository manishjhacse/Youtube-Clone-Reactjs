import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import API_KEY from "../constant/youtube";

export default function VideoCart({ item }) {
  const [ytIcon, setYtIcon] = useState("");
  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getYoutubeChannelName();
  }, []);
  return (
    <div className="cursor-pointer">
      <img
        className=" rounded-xl min-h-[200px] w-full"
        src={item.snippet.thumbnails.medium.url}
        alt="Thumbnail"
      />
      <div>
        <div className="flex gap-2 mt-2">
          {/* <Avatar
            className="cursor-pointer"
            src={ytIcon}
            round={true}
          /> */}
          <img src={ytIcon} alt="" className="cursor-pointer h-10 w-10 rounded-full" />
          <div className="ml-2">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
