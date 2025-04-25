import React, {useState} from 'react'

function busca() {
    const [username, setUsername] = useState("");

    const perfil = () => {
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Usuário não encontrado");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Erro na requisição:", error.message);
          });
      };


  return (
    <>
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">@</span>

            <input type="text" className="form-control" placeholder="Digite um usuário do Github" aria-label="Username" aria-describedby="addon-wrapping" value={username} onChange={(e) => setUsername(e.target.value)}/>


            <button onClick={perfil} type="button" className="btn btn-primary">buscar</button>
        </div>
    </>
  )
}

export default busca