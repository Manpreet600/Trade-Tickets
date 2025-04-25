import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, selectedContact, onSelectContact }) {
  return (
    <section className="rounded-xl border border-solid bg-[#1C1F24] border-white border-opacity-10 max-h-[80vh]">
      <h2 className="mb-4 text-xl font-semibold flex justify-center mt-[10px]">Chats</h2>
      <div className="flex flex-col gap-3">
        {contacts?.map((contact) => (
          <div>
            <ContactItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContact?.id === contact.id}
              onSelect={onSelectContact}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactList;
