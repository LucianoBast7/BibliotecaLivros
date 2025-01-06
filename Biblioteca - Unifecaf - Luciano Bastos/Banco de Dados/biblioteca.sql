-- Criação do Banco de Dados
CREATE DATABASE biblioteca;

-- Uso do Banco de Dados
USE biblioteca;

-- Criação da Tabela `livros`
CREATE TABLE livros (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(255),
    ano INT
);

-- Inserção de Dados de Exemplo
INSERT INTO livros (titulo, autor, genero, ano) VALUES
('Dom Casmurro', 'Machado de Assis', 'Romance', 1899),
('1984', 'George Orwell', 'Distopia', 1949),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Fábula', 1943);
