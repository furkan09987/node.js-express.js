//! This a middleware function. Middleware functions have three arguments. middleware(req,res,next)

const authorize = (req,res,next) => {
    const {user} = req.query

    if(user === 'john'){
    req.user = {name: 'john', id:3}
    next()  // if we are use a middle ware we alwyas use next
    }else{
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize