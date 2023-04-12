import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import { useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';



function App() {
   const URL = 'https://be-a-rym.up.railway.app/api/character'
   const API_KEY = '99148198607c.3a0dd5cdb1283d5d5ed6'
   const [characters, setCharacters] = useState([])

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== id))
   }

   function onSearch(id) {
      axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/> {/* Nav siempre aparecerá en todas las rutas */}
         <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} /> {/* Cards solo aparecerá en la ruta /home */}
            <Route path="/about" element={<About/>} /> {/* About solo aparecerá en la ruta /about */}
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/detail/:id" element={<Detail/>} /> {/* Detail aparecerá en la ruta /detail/:id, donde :id es un parámetro dinámico */}
         </Routes>
      </div>
   );
}

export default App;
