import React, { useState } from 'react';
import axios from 'axios';

import SuccessMessage from '../../components/SuccessMessage';
import UserProfile from '../../containers/UserProfile';

import './UserForm.scss';

const UserForm = () => {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('Teste');
  const [username, setUsername] = useState('Teste');
  const [email, setEmail] = useState('teste@teste.com');
  const [img_url, setImgUrl] = useState('');

  const handleSubmit = async (name, username, email, img_url) =>{
    console.log('teste')
    const response = axios.post('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users',{
      name,
      username,
      email,
      img_url
    });
    if(response)
      setRegistered(true);
  }

  return (
    <div data-testid="user-form">
      {registered && <SuccessMessage />}
      <UserProfile avatar={img_url} name={name} username={username} />
      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">

            <label>Nome</label>
            <input
              placeholder="Digite o nome..."
              value={name}
              onChange={e => setName(e.target.value)}>
            </input>

            <label>Usuário</label>
            <input
              placeholder="Digite o usuário..."
              value={username}
              onChange={e => setUsername(e.target.value)}>
            </input>

            <label>Email</label>
            <input
              placeholder="Digite o email..."
              value={email}
              onChange={e => setEmail(e.target.value)}>
            </input>

            <label>Url da Imagem de Perfil (use a url do Linkedin)</label>
            <input
              placeholder="http://..."
              value={img_url}
              onChange={e => setImgUrl(e.target.value)}>
            </input>

            <button onClick={() => handleSubmit(name, username, email, img_url)}>Cadastrar</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserForm;
