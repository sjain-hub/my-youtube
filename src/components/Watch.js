import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="col-span-12 grid grid-flow-col grid-cols-4 gap-4 px-16 py-4">
      <div className="col-span-3">
        <iframe
          className="rounded-lg w-full h-6/12"
          width="924"
          height="520"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="AI is 90% marketing and 10% reality"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="my-4">
          <h1 className="font-bold text-xl">Comments:</h1>
          <Comments />
        </div>
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
