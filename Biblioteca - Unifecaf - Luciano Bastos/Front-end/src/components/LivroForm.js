import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const LivroForm = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      carregarLivro();
    }
  }, [id]);

  const carregarLivro = async () => {
    const response = await axios.get(`http://localhost:8080/livros/${id}`);
    const { titulo, autor, genero, ano } = response.data;
    setTitulo(titulo);
    setAutor(autor);
    setGenero(genero);
    setAno(ano);
  };

  const salvarLivro = async (e) => {
    e.preventDefault();
    const livro = { titulo, autor, genero, ano };
    if (id) {
      await axios.put(`http://localhost:8080/livros/${id}`, livro);
    } else {
      await axios.post("http://localhost:8080/livros", livro);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>{id ? "Editar Livro" : "Adicionar Livro"}</h1>
      <form onSubmit={salvarLivro}>
        <div>
          <label>Título:</label>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Autor:</label>
          <input value={autor} onChange={(e) => setAutor(e.target.value)} />
        </div>
        <div>
          <label>Gênero:</label>
          <input value={genero} onChange={(e) => setGenero(e.target.value)} />
        </div>
        <div>
          <label>Ano:</label>
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default LivroForm;
