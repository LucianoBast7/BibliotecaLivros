# Sistema de Gerenciamento de Biblioteca

## Descrição
Sistema desenvolvido em Spring Boot (back-end) e React (front-end) com integração ao banco de dados MySQL. O sistema permite a gestão de livros, incluindo funcionalidades de CRUD.

---

## Requisitos
- **Java 17** ou superior
- **Node.js** (v16 ou superior)
- **MySQL Server**

---

## Como Configurar o Sistema

### 1. Configuração do Banco de Dados
1. Crie um banco de dados chamado `biblioteca`:
   ```sql
   CREATE DATABASE biblioteca;
   ```
2. Execute o script SQL para criar a tabela `livros`:
   ```sql
   CREATE TABLE livros (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       titulo VARCHAR(255),
       autor VARCHAR(255),
       genero VARCHAR(255),
       ano INT
   );
   ```

### 2. Configuração do Back-end
1. Navegue até a pasta do back-end:
   ```bash
   cd /caminho/para/back-end
   ```
2. Atualize o arquivo `application.properties` com suas credenciais do banco:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/biblioteca
   spring.datasource.username=SEU_USUARIO
   spring.datasource.password=SUA_SENHA
   ```
3. Inicie o servidor Spring Boot:
   ```bash
   mvn spring-boot:run
   ```

### 3. Configuração do Front-end
1. Navegue até a pasta do front-end:
   ```bash
   cd /caminho/para/front-end
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor React:
   ```bash
   npm start
   ```

---

## Como Testar
1. Acesse o front-end em [http://localhost:3000](http://localhost:3000).
2. Realize operações de CRUD pelos formulários disponíveis.
3. Verifique as mudanças no banco de dados.

---

## Estrutura do Projeto
```
/projeto-biblioteca
│
├── /back-end
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── /front-end
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## Entrega
1. **GitHub:**
   - Suba todo o projeto (back-end, front-end e banco de dados) em um repositório privado ou público no GitHub.
   - Inclua o link no arquivo README.md.

2. **ZIP:**
   - Compacte todos os arquivos e pastas do projeto em um arquivo `.zip`.
   - Certifique-se de incluir este arquivo `README.md`.

---

### Observação Final
Certifique-se de testar todo o sistema antes de finalizar a entrega, garantindo que todas as funcionalidades estejam funcionando conforme o esperado.

