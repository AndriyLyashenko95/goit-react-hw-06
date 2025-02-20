import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './components/redux/store';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <h1>Contact Book</h1>
      <SearchBox />
      <ContactsForm />
      <ContactList />
    </PersistGate>
  </Provider>
);

export default App;