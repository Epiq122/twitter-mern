import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.cookie('jwt', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true, // cookie cannot be accessed by client-side JS
    sameSite: 'strict', // cookie is sent only to the same site as the one that originated it
    secure: process.env.NODE_ENV !== 'development', // cookie is sent only over HTTPS
  });
};
