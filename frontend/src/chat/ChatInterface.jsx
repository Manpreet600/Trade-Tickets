"use client";
import * as React from "react";
import { useState } from "react";
import ContactList from "./ContactList";
import ChatArea from "./ChatArea";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      avatar:
        "https://images.pexels.com/photos/31759913/pexels-photo-31759913.jpeg",
      lastMessage: "I'm interested in trading my concert tickets",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar:
        "https://images.pexels.com/photos/31750448/pexels-photo-31750448.jpeg",
      lastMessage: "When is the event date?",
      unread: 0,
      online: true,
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");

  function selectContact(contact) {
    setSelectedContact(contact);
  }

  function sendMessage() {
    if (!currentMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: currentMessage,
        sender: "me",
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    setCurrentMessage("");
  }

  return (
    <div className="min-h-screen text-white bg-neutral-900 flex flex-col max-w-viewport p-[20px]">
      <div className="grid gap-6  my-0 max-w-screen-xl grid-cols-[300px_1fr] max-sm:p-4 max-sm:grid-cols-[1fr] flex-1">
        <ContactList
          contacts={contacts}
          selectedContact={selectedContact}
          onSelectContact={selectContact}
        />
        <ChatArea
          selectedContact={selectedContact}
          messages={messages}
          currentMessage={currentMessage}
          setCurrentMessage={setCurrentMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default ChatInterface;
