"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWebSocket from "@/components/useSocket";
import { Send, Ship, User } from "lucide-react";

interface ChatMessage {
  username: string;
  message: string;
  image?: string;
}

export default function ChatRoom({
  session,
  roomid,
}: {
  session: any;
  roomid: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(session?.user?.name);
  const [room] = useState(roomid);
  const ws = useWebSocket("ws://localhost:5000");

  useEffect(() => {
    if (!ws) return;

    ws.onopen = () => {
      console.log("Connected to chat");
      const message = { username, message: "getMessages", room };
      ws.send(JSON.stringify(message));
    };

    ws.onmessage = (event) => {
      console.log(event.data);
      const message: ChatMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };
  }, [ws]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (ws && input.trim()) {
      const message = {
        username,
        message: input,
        room,
        image: session?.user?.image,
      };
      ws.send(JSON.stringify(message));
      setInput("");
    }
  };


  const removepercent20fromstring = () => {

    let str = roomid;
    let newstr = str.replace(/%20/g, " ");
    return newstr;

  }

  return (
    <div className="flex flex-col items-center mx-auto w-full text-xm font-bold bg-white max-w-[480px] h-screen poppins-semibold reverse-schemed">
      <div className="h-full w-full flex flex-col items-center reverse-schemed justify-between">
        <div className="flex flex-col w-full h-full rounded-xl p-4">
          <h1
            className="text-2xl poppins-bold h-2/12 ml-2 w-full"
            style={{ minHeight: "5%" }}
          >
            Chat Room <span className="text-base">- {removepercent20fromstring()}</span>
          </h1>

          <div
            className="flex flex-col w-full min-h-4/6 rounded-xl p-2 overflow-y-scroll"
            style={{ minHeight: "85%" }}
          >
            {messages.map((message, index) => {
              if (username === message.username) {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-0 reverse-schemed  mb-1  rounded-xl"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div
                      className="text-lg poppins-regular border-2 w-fit  p-2 pl-4 pr-4 rounded-3xl "
                      style={{
                        maxWidth: "70%",
                        height: "fit-content",
                      }}
                    >
                      {message.message}
                    </div>
                  </div>
                );
              }

              return (
                <div className="flex flex-row gap-2  items-center">
                  <div className="w-11 h-11 rounded-full shadow-lg">
                    {session.user.image ? (
                      <img
                        src={
                          session.user.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
                        }
                        alt="profileImage"
                        className="rounded-full w-full h-full object-cover"
                      />
                    ) : (
                      <div className=" w-11 h-11 rounded-full  border-inherit reverse-schemed">
                        <User
                          className=" w-full h-full   rounded-full p-4  text-white cursor-pointer "
                          size={30}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    key={index}
                    className="flex flex-row gap-1 schemed mb-1 p-2  pl-4 pr-4 rounded-3xl w-fit"
                  >
                    {/* <div className="text-lg">{message.username}:</div> */}

                    <div
                      className="text-lg poppins-regular "
                      style={{
                        maxWidth: "70%",
                      }}
                    >
                      {message.message}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <form
            className="flex flex-col gap-2 justify-center"
            style={{ minHeight: "10%" }}
            onSubmit={sendMessage}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-3xl p-2 pl-4 schemed outline-none"
              placeholder="Type a message..."
              style={{ height: "50px" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
