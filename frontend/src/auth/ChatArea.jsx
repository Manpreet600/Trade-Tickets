import React from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

function ChatArea({
  selectedContact,
  messages,
  currentMessage,
  setCurrentMessage,
  sendMessage,
}) {
  return (
    <section className="flex flex-col rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
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
      ) : (
        <p className="flex-1 p-4 text-base text-zinc-400">
          Select a contact to start chatting
        </p>
      )}
    </section>
  );
}

export default ChatArea;
