import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = async () => {
    const response = await axios.get("http://localhost:8080/livros");
    setLivros(response.data);
  };

  const deletarLivro = async (id) => {
    await axios.delete(`http://localhost:8080/livros/${id}`);
    carregarLivros();
  };

  return (
    <div>
      <h1>Biblioteca</h1>
      <Link to="/adicionar">Adicionar Livro</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.genero}</td>
              <td>
                <Link to={`/editar/${livro.id}`}>Editar</Link>
                <button onClick={() => deletarLivro(livro.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
