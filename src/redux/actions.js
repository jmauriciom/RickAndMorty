export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER_CARDS = 'FILTER_CARDS'
export const ORDER_CARDS = 'ORDER_CARDS'

export const addFav = (char) => ({type: ADD_FAV, payload: char})

export const removefav = (id) => ({type: REMOVE_FAV,payload: id})

export const filterCards = (gender) => ({type: FILTER_CARDS, payload: gender})

export const orderCards = (order) => ({type: ORDER_CARDS, payload: order})


    