import { SignJWT, jwtVerify } from "jose";

export const createToken = async (
  payload: { sub: string },
  options: { exp: string },
) => {
  try {
    const secret = new TextEncoder().encode("shantanu2002");
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async (token: string) => {
  try {
    return jwtVerify(token, new TextEncoder().encode("shantanu2002"));
  } catch (error) {
    console.error(error);
    throw new Error("Token is expired");
  }
};
