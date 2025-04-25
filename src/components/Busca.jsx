import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Card from './Card';
import ErrorCard from './ErrorCard';
import { buscarUsuarioGithub } from '../services/githubAPI';

const Busca = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [erro, setErro] = useState(false);

  const perfil = async () => {
    const { data, erro } = await buscarUsuarioGithub(username);
    setUserData(data);
    setErro(erro);
  };

  return (
    <>
      <SearchInput username={username} setUsername={setUsername} onSearch={perfil} />
      {userData && <Card user={userData} />}
      {erro && <ErrorCard />}
    </>
  );
};

export default Busca;
