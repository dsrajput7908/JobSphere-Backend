export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  // const options = {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true, // Set httpOnly to true
  // };

  res.status(statusCode).cookie("token", token, {
    httpOnly:true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: process.env.NODE_ENV==="Development"?"lax":"none",
    secure : process.env.NODE_ENV==="Development"?false:true,
}).json({
    success: true,
    user,
    message,
    token,
  });
};
