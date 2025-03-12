import { serialize } from "cookie";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

const adminUser = {
  username: "admin",
  password: "$2b$10$mcLdZaAzP.9T90dW0geFXuClukPf0p6FVl0S82hkxQrZPkB422puy",
};

export default async function handler(req, res) {
  const { username, password } = req.body;
  if (username !== adminUser.username) {
    res.status(401).json({ message: "Unauthorized" });
  }
  const isMatch = await bcrypt.compare(password, adminUser.password);
  if (!isMatch) {
    res.status(401).json({ message: "Wrong Password" });
  }
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(SECRET_KEY);

  const cookie = serialize("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "Login successful" });
}
