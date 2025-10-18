import mongoose from "mongoose";

const options = {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  collection: "users" // Custom collection name
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"]
    },
    age: {
      type: Number,
      min: [18, "Must be at least 18 years old"],
      max: [100, "Age cannot exceed 100 years"]
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  },
  options
);

export default mongoose.model("User", userSchema);
