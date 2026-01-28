import mongoose from "mongoose";

const adminScheema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
      trime: true,
      Validate: {
        validator: (v) => {
          return /^[6-9]\d{9}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit Indian phone number!`,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trime: true,
      lowercase: true,
      Validate: {
        validator: (v) => {
          return /^\S+@\S+\.\S+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      trime: true,
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
    photo:{
      type:string,
      default:"https://tse1.mm.bing.net/th/id/OIP.0AKX_YJS6w3y215EcZ-WAAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    role:{
        type:string,
        required:true,
        enum:['admin','super-admin'],
        default:'admin'
        }
  },
  { timestamps: true }
);
export const Admin = mongoose.model("Admin", adminScheema);