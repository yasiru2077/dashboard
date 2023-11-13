import asyncHandler from "express-async-handler";
// @description Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser =asyncHandler (async (req, res) => {

    res.status(200).json({message:'Auth User'});

});

const registerUser = asyncHandler (async (req, res) => {

    res.status(200).json({message:'Register User'});

});

const LogoutUser = asyncHandler (async (req, res) => {

    res.status(200).json({message:'Logout User'});

});

export { authUser };