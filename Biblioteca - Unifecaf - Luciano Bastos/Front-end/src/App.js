import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LivroForm from "./components/LivroForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adicionar" element={<LivroForm />} />
        <Route path="/editar/:id" element={<LivroForm />} />
      </Routes>
    </Router>
  );
}

export default App;

