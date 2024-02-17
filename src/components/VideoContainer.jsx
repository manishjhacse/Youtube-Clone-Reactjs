import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY, { BASE_URL, YOUTUBE_VIDEO_API } from "../constant/youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../store/appSlice";
export default function VideoContainer() {
  //   const [videos, setVideos] = useState([]);
  const { videos, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const fetchYoutubeVideo = async () => {
    try {
      console.log(YOUTUBE_VIDEO_API);
    //   console.log("try block started");
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      //   setVideos(res?.data?.items);
    //   console.log("data fetched");
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoByCategory = async () => {
    try {
    //   console.log("fetch started");
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
    //   console.log("fetch finished");
      // console.log(res.data)
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category === "All") {
      fetchYoutubeVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);
  return (
    <div className="grid h-screen hideScrollBar overflow-y-scroll grid-cols-1 md:grid-cols-3 mt-2 gap-3">
      {videos.map((item) => {
        return (
          <Link to={`/watch?v=${typeof item.id==='object'?item.id.videoId:item.id}`} key={typeof item.id==='object'?item.id.videoId:item.id}>
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
}
