import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import youtubeLogo from "../images/youtubeLogo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import icon from "../images/icon.jpg";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSidebar,
} from "../store/appSlice";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../constant/youtube";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [input, setInput] = useState("");
  const suggestion = useSelector((store) => store.app.searchSuggestion);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const searchVideo = (text) => {
    dispatch(setCategory(text));
    setInput("");
  };
  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const timer=setTimeout(() => {
      showSuggestion();
    }, 200);
    return()=>{
      clearTimeout(timer)
    }
  }, [input]);
  return (
    <nav className="fixed left-0 right-0 bg-white flex justify-between gap-2 px-5 py-3">
      <div className="flex items-center">
        <GiHamburgerMenu
          className="hidden md:block cursor-pointer"
          onClick={handleSidebar}
          size={"24px"}
        />
          <Link to={'/'}>
          <img
          className="md:w-[125px] w-[200px] md:px-5"
          src={youtubeLogo}
          alt="YT_LOGO"
          />
          </Link>
       
      </div>
      <div className="flex md:w-[40%] items-center">
        <div className="border py-2 px-4 w-full border-gray-400 rounded-l-full">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button
          onClick={()=>searchVideo(input)}
          className="py-2 border px-4 rounded-r-full border-gray-500"
        >
          <CiSearch size={"24px"} />
        </button>
       {
        input!==""&&
         <div
         className={`absolute z-50 shadow-md rounded-b-lg bg-white px-4 py-2 w-[40%] top-14 ${
            suggestion.length === 0 ? "hidden" : ""
          }`}
        >
          <ul>
            {suggestion.map((text, index) => {
              return (
                <div onClick={()=>searchVideo(text)} key={index} className= " flex font-medium items-center gap-2 hover:bg-gray-300 transition-all duration-200 cursor-pointer rounded-md px-3 py-2">
                   <CiSearch size={"24px"} />
                  <li >{text}</li>
                </div>
              );
            })}
          </ul>
        </div>
      }
      </div>

      <div className="hidden md:flex items-center w-[8%] justify-between">
        <RiVideoAddLine className="cursor-pointer font-bold" size={"24px"} />
        <IoIosNotificationsOutline
          className="cursor-pointer font-bold"
          size={"24px"}
        />
        <Avatar className="cursor-pointer" src={icon} size={30} round={true} />
      </div>
    </nav>
  );
}
