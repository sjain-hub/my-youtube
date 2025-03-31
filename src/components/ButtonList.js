import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Podcasts",
    "News",
    "Industry",
    "Mixes",
    "All",
    "Music",
    "Podcasts",
    "News",
    "Industry",
    "Mixes",
    "All",
    "Music",
    "Podcasts",
    "News",
    "Industry",
    "Mixes",
    "All",
    "Music",
    "Podcasts",
    "News",
    "Industry",
    "Mixes",
  ];

  return (
    <div className="flex gap-4 overflow-x-auto">
      {btnList.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
