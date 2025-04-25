import React from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import chatImg from "../assets/chat.png";

function ChatArea({
  selectedContact,
  messages,
  currentMessage,
  setCurrentMessage,
  sendMessage,
}) {
  return (
    <section className="flex flex-col rounded-xl border border-solid bg-[#1C1F24] border-white border-opacity-10 max-h-[80vh]">
      {selectedContact ? (
        <>
          <header className="flex gap-3 items-center p-4 border-b border-solid border-b-white border-b-opacity-10">
            <img
              className="object-cover overflow-hidden w-10 h-10 rounded-full aspect-square"
              src={selectedContact.avatar}
              alt={`${selectedContact.name}'s avatar`}
            />
            <div>
              <h3 className="font-semibold">{selectedContact.name}</h3>
              <p className="text-sm text-zinc-400">Online</p>
            </div>
          </header>
          <div className="flex overflow-y-auto flex-col flex-1 gap-4 p-6">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
          <ChatInput
            currentMessage={currentMessage}
            setCurrentMessage={setCurrentMessage}
            sendMessage={sendMessage}
          />
        </>
      ) : (<div className="flex flex-col my-auto">
        <div className="flex w-[100%] my-auto justify-center">
          <div className="overflow-hidden w-[400px] h-[250px]">
            <img
              src={chatImg}
              className="w-[500px] h-[500px] object-cover transform -translate-y-[100px]"
              alt="Chat Illustration"
            />
          </div>


        </div>
        <p className="flex-1 p-4 text-base text-zinc-400 flex justify-center text-[25px]">
          Select a contact to start chatting
        </p>
      </div>
      )}
    </section>
  );
}

export default ChatArea;
