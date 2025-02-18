import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;