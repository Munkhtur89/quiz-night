// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Table from "@/Model/Table";
import connectDB from "../../lib/connectDB";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  await connectDB();
  if (req.method === "GET") {
    try {
      const data = await Table.find({ date: req.query.date });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
