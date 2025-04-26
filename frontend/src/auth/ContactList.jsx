import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, selectedContact, onSelectContact }) {
  return (
    <section className="p-4 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
      <h2 className="mb-4 text-xl font-semibold">Chats</h2>
      <div className="flex flex-col gap-3">
        {contacts?.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            isSelected={selectedContact?.id === contact.id}
            onSelect={onSelectContact}
          />
        ))}
      </div>
    </section>
  );
}

export default ContactList;
