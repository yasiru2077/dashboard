
// @desc Auth user/set token
// route POST /api/users/auth
// @access public
const authUser = async(req, res) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
