import React from "react";
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name) || ""; 
  console.log(filter);

  const contacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  if (contacts.length === 0) {
    return <p>Список контактів порожній.</p>;
  }

  return (
    <div >
      {contacts.map((contact) => (
        <Contact key={contact.id} contactItem={contact} />
      ))}
    </div>
  );
};

export default ContactList;