const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    try {
        const { headers: { authorization }, params: {id} } = req;

        if (authorization) {
            const token = authorization.split(' ').slice(1);

            const result = jwt.verify(token[0], process.env.JWT_SEC)

            if(result.id === id){
                req.user = result;
    
                return next();
            }
            res.status(401).json("Incorrect Id");
        }

        res.status(401).json("You aren't authenticated");

    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const verifyAuthorization = async (req, res, next) => {
    try {
        const { headers: { authorization } } = req;

        if (authorization) {
            const token = authorization.split(' ').slice(1);

            const result = jwt.verify(token[0], process.env.JWT_SEC, (err, user) => {
                if(err){
                    res.status(403).json("Token is expired")
                }

                req.user = user;
            })
            next();
        }

        res.status(401).json("You aren't authenticated");

    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

module.exports = {
    verifyToken,
    verifyAuthorization
}