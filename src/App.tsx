import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import ContactEdit from './components/ContactEdit';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
        <Route path="/contacts/:id/edit" element={<ContactEdit />} />
      </Routes>
    </>
  );
}

export default App;
