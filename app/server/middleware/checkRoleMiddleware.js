const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.authorization.split(' ')[1]; //type and token
      if (!token) {
        return res.status(401).json({ message: "User didn't authorization" });
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (decoded.role !== role) {
        return res.status(403).json({ message: "Don't have rules" });
      }

      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "User didn't authorization" });
    }
  };
};
