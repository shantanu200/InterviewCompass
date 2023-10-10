import mongoose, { ConnectOptions } from "mongoose";

export default async function connectDatabase() {
  let dbUrl = process.env.DBURI;

  if (!dbUrl) {
    console.error(`Please enter valid database url`);
    return;
  }

  try {
    const connection = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    if (connection) {
      console.log(`MongoDB is connected to Application`);
    }
  } catch (error) {
    console.error(error);
  }
}
