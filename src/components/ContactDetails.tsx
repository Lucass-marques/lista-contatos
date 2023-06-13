import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/store';
import { removeContact } from '../features/contactsSlice';

const ContactDetailsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactDetailsInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactDetailsActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  a,
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    display: inline-block;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  button {
    margin-left: 10px;
  }
`;

const ContactDetails = () => {
  const { id } = useParams();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(contact => contact.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    if (contact) {
      dispatch(removeContact(contact.id));
      navigate('/');
    }
  };

  if (!contact) {
    return <div>Contato não encontrado.</div>;
  }

  return (
    <ContactDetailsContainer>
      <h1>Detalhes do Contato</h1>
      <ContactDetailsInfo>
        <p>Nome: {contact.fullName}</p>
        <p>Email: {contact.email}</p>
        <p>Telefone: {contact.phone}</p>
      </ContactDetailsInfo>
      <ContactDetailsActions>
        <Link to="/">Voltar</Link>
        <Link to={`/contacts/${contact.id}/edit`}>Editar</Link>
        <button onClick={handleRemove}>Excluir</button>
      </ContactDetailsActions>
    </ContactDetailsContainer>
  );
};

export default ContactDetails;
