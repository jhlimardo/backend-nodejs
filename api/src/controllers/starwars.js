const axios = require('axios').default;


const getPeople = async (req, res) => {
    try {
        const name = req.query.search
        const result = await axios.get(`https://swapi.dev/api/people/?search=${name}`)
        res.status(200).json(result.data.results);
    } catch (err) {
        res.status(500).send("Oops...!!!hubo un error");
    }
}

module.exports = {
    getPeople
};