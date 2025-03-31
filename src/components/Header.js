import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/redux/appSlice";
import { debounce } from "../utils/debounce";

const Header = () => {
  const [serchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };

  const autoSuggestionApi = (val) => {
    console.log(val);
  };

  const handleSearch = debounce(autoSuggestionApi, 1000);

  useEffect(() => {
    serchQuery?.length > 0
      ? setShowSuggestions(true)
      : setShowSuggestions(false);
  }, [serchQuery]);

  return (
    <div className="grid grid-flow-col grid-cols-4 px-4">
      <div className="flex items-center">
        <img
          onClick={() => toggleSidebarMenu()}
          className="w-8 h-auto cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"
          alt="abcd"
        />
        <img
          className="w-auto h-14 ml-4"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="defg"
        />
      </div>
      <div className="relative col-span-2 m-2">
        <div className="flex">
          <input
            className="px-4 py-2 w-full border border-gray-300 rounded-l-full"
            type="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            value={serchQuery}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 border border-gray-300 bg-gray-50 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute px-4 py-2 w-11/12 rounded-lg shadow-lg bg-white">
            <ul>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
              <li>iphone</li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end">
        <img
          className="w-8 h-8"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="zxcv"
        />
      </div>
    </div>
  );
};

export default Header;
