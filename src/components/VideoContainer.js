import React, { useEffect, useState } from "react";
import { YOTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOTUBE_API_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  if (videos.length === 0) {
    return <div>No Videos</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-4 py-4">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={`watch?v=${video.id}`}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
