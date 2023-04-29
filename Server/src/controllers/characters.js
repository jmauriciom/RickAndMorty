const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character'
const STATUS_OK = 200

async function getCharById(req, res) {
    try {
        const { id } = req.params
        const { data } = await axios.get(`${URL}/${id}`)
        if (!data.name) throw new Error('Not found')
        return res.status(STATUS_OK).send(data)
    } catch (error) {
        return res.status(500).send(error.message)
    }

    }

    module.exports = {
        getCharById
    };