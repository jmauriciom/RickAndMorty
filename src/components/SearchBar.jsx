import React, { useState } from "react";
import styles from './card.module.css';

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
    }
  }

  const handleSearch = () => {
    onSearch(id); 
    setId("");
  }

  return (
    <div>
      <input type='search' className={styles.redondeado} value={id} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button className={styles.boton} onClick={handleSearch}>Agregar</button>
    </div>
  )
}