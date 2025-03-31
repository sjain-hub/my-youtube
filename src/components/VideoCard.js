import React from "react";

const VideoCard = ({ data }) => {
  const { title, channelTitle, thumbnails } = data?.snippet;
  return (
    <div className="my-6 cursor-pointer">
      <img className="rounded-xl" alt="abcd" src={thumbnails?.medium?.url} />
      <div>
        <h1 className="mt-2 font-bold">{title}</h1>
        <h2>{channelTitle}</h2>
        <h2>{data?.statistics?.viewCount} views</h2>
      </div>
    </div>
  );
};

export default VideoCard;
