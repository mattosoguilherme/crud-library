import { Schema, model } from "mongoose";

const BookSchema = new Schema(
  {
    title: String,
    publishing_company: String,
    authors: Array,
    cover: String,
  },
  {
    timestamps: true,
  }
);

export default model("Books", BookSchema);
