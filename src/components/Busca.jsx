import React, { useState } from 'react';
import Card from './Card';

const Busca = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [erro, setErro] = useState(false);

  const perfil = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Usuário não encontrado');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setErro(false); // zera o erro se achou usuário
      })
      .catch((error) => {
        console.error('Erro na requisição:', error.message);
        setUserData(null);
        setErro(true); // ativa mensagem de erro
      });
  };

  return (
    <>
      <div className="input-group flex-nowrap my-3">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Digite um usuário do Github"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={perfil}>
          Buscar
        </button>
      </div>

      {/* Card de perfil */}
      {userData && <Card user={userData} />}

      {/* Card de erro */}
      {erro && (
        <div className="card text-center mt-3" style={{ width: '18rem' }}>
          <div className="card-body">
            <p className="card-text">Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Busca;
