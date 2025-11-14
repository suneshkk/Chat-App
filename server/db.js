import mongoose from "mongoose";
// monngo url checking below console line
      // console.log("uri",process.env.MONGO_URI)


export const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);

      console.log("DB connected successfully")

  } catch (error) {
    console.log(error);
  }
};
