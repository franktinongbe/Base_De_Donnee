module.exports = (req, res, next) => {
  if (req.userData.role !== "userPro") {
    return res.status(403).json({ message: "Accès refusé" });
  }
  next();
};
