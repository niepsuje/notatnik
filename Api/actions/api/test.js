// module.exports = (req, res) => {
//     res.send('Server działa!');
// };

// Dla większej ilości testowych akcji
module.exports = {
    homepage: (req, res) => {
        res.send('Strona główna działa!');
    }
}