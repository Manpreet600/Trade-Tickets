import React from "react";

function ChatButton({number}) {
  return (
    <button
      className="px-4 py-2 text-sm font-semibold bg-blue-400/30 rounded-md cursor-pointer border-none text-white"
      aria-label="Buy Now"
      onClick={() => {
        window.open(`https://wa.me/${number}?text=`, "_blank");
      }
      }
    >
        Chat
    </button>
  );
}

export default ChatButton;
