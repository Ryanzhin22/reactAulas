/*import './App.css';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js'
import Lista from "./components/Lista.js"
import Evento from "./components/Evento.js"
import Form from "./components/Form.js"
import Condicional from './components/Condicional.js';
import OutraLista from './components/OutraLista.js';
import SeuNome from './components/SeuNome.js';
import { useState } from 'react';
import Saudacao from './components/Saudacao.js';*/

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contat'
import Navbar from './components/Layout/Navbar'
import Footer from "./components/Layout/Footer"

function App() {

  /* Definição de Variáveis e Funções */
  /* 

  const nome = "Ryan"
  const newName = nome.toUpperCase()

  function soma(a,b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"
  */
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
