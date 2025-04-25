import React from "react";

function ContactItem({ contact, isSelected, onSelect }) {
  return (
    <button
      className="mx-[15px] flex gap-3 items-center w-full max-w-[280px] text-left rounded-lg cursor-pointer border-[none] text-[white]"
      onClick={() => onSelect(contact)}
      style={{
        backgroundColor: isSelected
          ? "rgba(121, 192, 255, 0.1)"
          : "transparent",
      }}
    >
      <div className="relative">
        <img
          className="object-cover overflow-hidden w-10 h-10 rounded-full aspect-square"
          src={contact.avatar}
          alt={`${contact.name}'s avatar`}
        />
        {contact.online && (
          <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-600 rounded-full border-2 border-solid border-neutral-900" />
        )}
      </div>
      <div className="flex-1 max-w-[190px]">
        <div className="mb-1 font-medium">{contact.name}</div>
        <div className="max-w-[190px] overflow-hidden text-sm whitespace-nowrap text-ellipsis text-zinc-400">
          {contact.lastMessage}
        </div>
      </div>
      {contact.unread > 0 && (
        <div className="px-2 py-0.5 text-xs font-semibold bg-green-700 rounded-xl text-[white]">
          {contact.unread}
        </div>
      )}
    </button>
  );
}

export default ContactItem;
