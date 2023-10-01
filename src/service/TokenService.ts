const jwt = require('jsonwebtoken');

export const generateJWT = (uid: string): any => {
  const payload = { uid };

  return jwt.sign(payload,
    process.env.SECRET_PRIVATE_KEY_JWT,
    { expiresIn: '2h' });
}
