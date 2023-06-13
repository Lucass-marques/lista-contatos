import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/store';

const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ContactName = styled.span`
  font-weight: bold;
`;

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <ContactListContainer>
      <h1>Agenda de Contatos</h1>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactItem>
                <div>
                  <ContactName>{contact.fullName}</ContactName>
                  <p>Email: {contact.email}</p>
                  <p>Telefone: {contact.phone}</p>
                </div>
                <Link to={`/contacts/${contact.id}`}>Detalhes</Link>
              </ContactItem>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">Adicionar Contato</Link>
    </ContactListContainer>
  );
};

export default ContactList;
