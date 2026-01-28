import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian phone number",
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v) => {
          if (v.length < 8 || v.length > 128) {
            return false;
          }

          return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
        },
        message: (props) =>
          "Password must be at least 8 characters long and contain at least one letter and one number",
      },
    },
    profilePic: {
      type: String,
      default: "https://tse1.mm.bing.net/th/id/OIP.0AKX_YJS6w3y215EcZ-WAAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      required: true,

    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
