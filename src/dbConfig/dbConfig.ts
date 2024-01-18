import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("conected successfully");
    });

    connection.on("error", (err) => {
      console.log("mongoDB connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("something worng");
    console.log(error);
  }
}
