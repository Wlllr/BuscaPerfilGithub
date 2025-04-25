import React from 'react'

const Card = ({user}) => {
  if (!user) return null;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={user.avatar_url} className="card-img-top" alt={user.login} />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.bio}</p>
      </div>
    </div>
  );
};

export default Card;