import { serialize } from "cookie";
import { SignJWT } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function handler(req, res) {
  const { username, password } = req.body;
  if (username === "admin" && password === "password123") {
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(SECRET_KEY);

    const cookie = serialize("session", token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);
    res.status(200).json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Unauthorized" });
}
