const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character'
const STATUS_OK = 200
const STATUS_ERROR = 404

function getCharById(req, res) {
    const { id } = req.params
    axios.get(`${URL}/${id}`)
        .then(response => response.data)
        .then(({ status, name, species, origin, image, gender }) => {
            if (name) {
                const character = {
                    id,
                    name,
                    species,
                    origin,
                    image,
                    gender,
                    status
                }
                return res.status(STATUS_OK).send(character)
            } 
            return res.status(STATUS_ERROR).send('Not found')
        })
        .catch(error => res.status(500).send(error.message))
    }

    module.exports = {
        getCharById
    };