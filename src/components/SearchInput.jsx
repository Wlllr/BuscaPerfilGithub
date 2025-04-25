import React from 'react';

const SearchInput = ({ username, setUsername, onSearch }) => {
  return (
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
      <button type="button" className="btn btn-primary" onClick={onSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
