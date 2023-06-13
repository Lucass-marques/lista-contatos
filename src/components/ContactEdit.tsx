import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/store';
import { editContact } from '../features/contactsSlice';

const ContactEditContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactEditForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button[type='submit'] {
    margin-top: 10px;
  }
`;

const ContactEdit = () => {
  const { id } = useParams();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(contact => contact.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(contact ? contact.fullName : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      dispatch(editContact({ id: contact.id, fullName, email, phone }));
      navigate(`/contacts/${contact.id}`);
    }
  };

  if (!contact) {
    return <div>Contato não encontrado.</div>;
  }

  return (
    <ContactEditContainer>
      <h1>Editar Contato</h1>
      <ContactEditForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit">Salvar</button>
        <Link to={`/contacts/${contact.id}`}>Cancelar</Link>
      </ContactEditForm>
    </ContactEditContainer>
  );
};

export default ContactEdit;
