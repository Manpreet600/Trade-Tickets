"use client";
import * as React from "react";
import { useState } from "react";
import AuthForm from "./AuthForm";

function Auth2() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  // Keeping these states for backward compatibility
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
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

  function toggleForm() {
    setIsSignUp(!isSignUp);
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  }

  function handleInputChange(field, value) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  // Keeping these functions for backward compatibility
  function selectContact(contact) {
    setSelectedContact(contact);
  }

  function sendMessage() {
    if (!currentMessage.trim()) return;
    messages.push({
      id: Date.now(),
      text: currentMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString(),
    });
    setCurrentMessage("");
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-white bg-neutral-900">
      <AuthForm
        isSignUp={isSignUp}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onToggleForm={toggleForm}
      />
    </div>
  );
}

export default Auth2;
