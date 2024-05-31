const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (token) {
            jwt.verify({ deepak: "Deepak" }, secreateKey, (err, decoded)){
                if (err) {
                    res.status(200).json({ msg: err })
                }
                else {
                    console.log(decoded);
                    next();
                }
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
module.exports ={
    authMiddleware
}