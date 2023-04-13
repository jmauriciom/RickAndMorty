const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.myFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
            }

        case "FILTER_CARDS":
            const allCharactersCopy = [...state.allCharacters];
            const filteredCharacters = allCharactersCopy.filter((char) => char.gender === action.payload);
            return {
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ? [...state.allCharacters]
                : filteredCharacters
            };
        case 'ORDER_CARDS':
            let charactersCopia = [...state.myFavorites];
            if (action.payload === 'A') {
                charactersCopia.sort((a, b) => a.id - b.id);
            } else if (action.payload === 'D') {
                charactersCopia.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: charactersCopia
            }
        default:
            return state;
    }
}

export default rootReducer;