import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import styles from './detail.module.css'



const Detail = () => {
    const URL = 'https://be-a-rym.up.railway.app/api/character'
    const API_KEY = '99148198607c.3a0dd5cdb1283d5d5ed6'
    const {id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={styles.contdetail}>
            <h2 className={styles.text} >{character?.name}</h2>
            <h2 className={styles.text}>{character?.status}</h2>
            <h2 className={styles.text}>{character?.species}</h2>
            <h2 className={styles.text}>{character?.gender}</h2>
            <h2 className={styles.text}>{character?.origin?.name}</h2>
            <img className="" src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail


