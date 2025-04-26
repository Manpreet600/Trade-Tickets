import React from "react";

function MessageBubble({ message }) {
  const isFromMe = message.sender === "me";

  return (
    <div
      className="max-w-[70%]"
      style={{
        alignSelf: isFromMe ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="px-4 py-3 rounded-xl"
        style={{
          backgroundColor: isFromMe
            ? "rgb(26, 127, 55)"
            : "rgba(255, 255, 255, 0.1)",
          borderBottomRightRadius: isFromMe ? "4px" : "12px",
          borderBottomLeftRadius: isFromMe ? "12px" : "4px",
        }}
      >
        {message.text}
      </div>
      <time className="mt-1 text-xs text-zinc-400">{message.timestamp}</time>
    </div>
  );
}

export default MessageBubble;
