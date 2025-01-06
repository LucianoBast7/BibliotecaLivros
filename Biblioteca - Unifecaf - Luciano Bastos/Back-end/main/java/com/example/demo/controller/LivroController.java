package com.example.demo.controller;

import com.example.demo.model.Livro;
import com.example.demo.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public List<Livro> listarLivros() {
        return livroService.listarTodos();
    }

    @PostMapping
    public Livro adicionarLivro(@RequestBody Livro livro) {
        return livroService.salvar(livro);
    }

    @PutMapping("/{id}")
    public Livro atualizarLivro(@PathVariable Long id, @RequestBody Livro livro) {
        return livroService.atualizar(id, livro);
    }

    @DeleteMapping("/{id}")
    public void deletarLivro(@PathVariable Long id) {
        livroService.deletar(id);
    }
}
