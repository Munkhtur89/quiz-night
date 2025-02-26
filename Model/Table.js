import mongoose from "mongoose";

const min = [
  1,
  "The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).",
];
const max = [
  50,
  "The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).",
];

const Table = mongoose.Schema(
  {
    table_no: {
      type: Number,
      required: true,
      min: min,
      max: max,
    },
    team_name: {
      type: String,
      required: true,
    },
    date: {
      required: true,
      type: Date,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Table || mongoose.model("Table", Table);
