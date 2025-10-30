//! middleware fonksiyonu
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
    //res.send('Texting')   // sending response back to ourselves
}

module.exports = logger