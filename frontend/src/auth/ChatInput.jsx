"use client";
import React from "react";

function ChatInput({ currentMessage, setCurrentMessage, sendMessage }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <footer className="p-4 border-t border-solid border-t-white border-t-opacity-10">
      <div className="flex gap-3">
        <input
          className="flex-1 px-4 py-3 rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-[white]"
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-6 py-3 font-semibold bg-green-700 rounded-lg cursor-pointer border-[none] text-[white]"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </footer>
  );
}

export default ChatInput;
