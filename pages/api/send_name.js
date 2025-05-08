// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Table from '@/Model/Table';
import connectDB from '../../lib/connectDB';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  await connectDB();
  if (req.method === 'POST') {
    const { table_no, date, team_name, phone_number } = req.body;
    if (!table_no || !team_name) {
      res.status(400).send({ error: 'table_no or team_name not provided' });
    } else {
      try {
        let uptable_no;
        if (table_no.includes('t')) {
          uptable_no = table_no.split('t').join('');
        } else {
          uptable_no = table_no;
        }
        const updated = await Table.findOne({ table_no, date });
        if (updated) {
          res.status(400).json({ error: 'already taken seat' });
          return;
        }
        const table = new Table({
          table_no,
          date,
          team_name,
          phone_number,
        });
        const data = await table.save();
        res.status(200).json({ ...data._doc });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  } else {
    res.status(400).send({ error: 'Wrong method' });
  }
}
