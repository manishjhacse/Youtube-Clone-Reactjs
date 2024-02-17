import React from "react";

export default function ChatMessage({item}) {
  return (
    <div className="flex items-center my-2">
      <div>
        <img
          className="h-8 w-8 rounded-full"
          src="https://pngimg.com/uploads/youtube/youtube_PNG102349.png"
          alt=""
        />
      </div>
      <div className="flex items-center w-full">
        <h1 className="ml-2 font-bold text-xs">{item.name}</h1>
        <p className="ml-1 py-2 text-xs">{item.message}</p>
      </div>
    </div>
  );
}
