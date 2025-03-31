import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";

const Chat = ({ name, message }) => {
  return (
    <div className="flex my-4  ">
      <img
        className="w-8 h-8 mr-2"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="zxcv"
      />
      <div className="flex  w-full align-middle">
        <p>
          <span className="font-bold mr-2">{name}</span>
          {message}
        </p>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const liveMessages = useSelector((store) => {
    return store.chat.messages;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let t1 = setInterval(() => {
      dispatch(
        addMessage({
          name: "abcd",
          message: "asjkd fhwebkr jvbaek",
        })
      );
    }, 2000);

    return () => {
      clearInterval(t1);
    };
  }, []);

  return (
    <div className="flex overflow-y-scroll flex-col-reverse h-2/6 rounded-lg border border-gray-400 p-2">
      <div>
        {liveMessages?.map((msg) => (
          <Chat name={msg.name} message={msg.message} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default LiveChat;
