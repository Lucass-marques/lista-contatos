import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addContact } from '../features/contactsSlice';

const ContactFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
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

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now().toString();
    dispatch(addContact({ id, fullName, email, phone }));
    navigate('/');
  };

  return (
    <ContactFormContainer>
      <h1>Adicionar Contato</h1>
      <Form onSubmit={handleSubmit}>
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
        <Link to="/">Cancelar</Link>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
