export const buscarUsuarioGithub = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
  
      const data = await response.json();
      return { data, erro: false };
    } catch (erro) {
      console.error('Erro na requisição:', erro.message);
      return { data: null, erro: true };
    }
  };
  