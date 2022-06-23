import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Title"],
  },
  slug: {
    type: String,
    required: [true, "Please Enter Slug"],
  },
  metades: {
    type: String,
    required: [true, "Please Enter MetaDescription"],
  },
  body: {
    type: String,
    required: [true, "Please Enter Body"],
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
