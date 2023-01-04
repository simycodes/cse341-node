// THIS IS A CONTROLLER FILE

const displayName = (req, res) => {
    res.status(200).send('Richard Voigt!');
}


module.exports = { displayName }