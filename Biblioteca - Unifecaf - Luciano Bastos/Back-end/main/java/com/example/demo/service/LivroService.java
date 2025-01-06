package com.example.demo.service;

import com.example.demo.model.Livro;
import com.example.demo.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Livro salvar(Livro livro) {
        return livroRepository.save(livro);
    }

    public Livro atualizar(Long id, Livro livro) {
        Livro livroExistente = livroRepository.findById(id).orElseThrow();
        livroExistente.setTitulo(livro.getTitulo());
        livroExistente.setAutor(livro.getAutor());
        livroExistente.setGenero(livro.getGenero());
        livroExistente.setAno(livro.getAno());
        return livroRepository.save(livroExistente);
    }

    public void deletar(Long id) {
        livroRepository.deleteById(id);
    }
}
