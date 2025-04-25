import React from 'react';

const ErrorCard = () => {
  return (
    <div className="card text-center mt-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Usuário não encontrado</h5>
        <p className="card-text">
          Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente!
        </p>
      </div>
    </div>
  );
};

export default ErrorCard;
