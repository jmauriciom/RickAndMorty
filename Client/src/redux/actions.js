import axios from "axios"


export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER_CARDS = 'FILTER_CARDS'
export const ORDER_CARDS = 'ORDER_CARDS'

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
            type: 'ADD_FAV',
            payload: data,
        });
    });
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
        return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
    });
    });
    };
};

export const filterCards = (gender) => ({type: FILTER_CARDS, payload: gender})

export const orderCards = (order) => ({type: ORDER_CARDS, payload: order})


    