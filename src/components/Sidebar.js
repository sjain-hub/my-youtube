import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="h-auto col-span-1">
      <div>
        <h1>Subscriptions</h1>
        <ul>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
        </ul>
      </div>
      <div>
        <h1>Subscriptions</h1>
        <ul>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
        </ul>
      </div>
      <div>
        <h1>Subscriptions</h1>
        <ul>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
        </ul>
      </div>
      <div>
        <h1>Subscriptions</h1>
        <ul>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
        </ul>
      </div>
      <div>
        <h1>Subscriptions</h1>
        <ul>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
          <li>sdnkfekjf</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
