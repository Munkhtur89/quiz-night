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
      let tuesdays = [];
      let thursdays = [];
      let date = new Date();
      date.setDate(date.getDate() + 7);
      date.setHours(11, 0, 0, 0);

      while (tuesdays.length < 16 || thursdays.length < 16) {
        const day = date.getDay();

        if (day === 2 && tuesdays.length < 16) {
          tuesdays.push(new Date(date));
        }
        if (day === 4 && thursdays.length < 16) {
          thursdays.push(new Date(date));
        }
        date.setDate(date.getDate() - 1);
      }
      res.status(200).json({ tuesdays, thursdays });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
