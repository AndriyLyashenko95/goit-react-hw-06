import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormVisibility } from "./redux/visibleSlice";
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const isFormVisible = useSelector((state) => state.visible.isFormVisible);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(toggleFormVisibility());
  };

  return (
    <div>
      <h1>Телефонна книга</h1>
      {contactsList.length > 1 && <SearchBox />}
      {isFormVisible ? (
        <ContactForm closeForm={toggleForm} />
      ) : (
        <button onClick={toggleForm}>
          Додати контакт
        </button>
      )}
      <ContactList closeForm={toggleForm} />
    </div>
  );
};

export default App;