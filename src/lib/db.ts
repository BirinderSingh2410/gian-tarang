import mongoose from "mongoose";

let cached = global.mongoose; // If already there is mongoose connection is established.

const mongoUrl = process.env.MONGO_URI!

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
export const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };
    cached.promise = mongoose
      .connect(mongoUrl, opts)
      .then(() => {
        console.log("Connection of db is esatblished!");
        return mongoose.connection;
      });
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.log(error)
    throw error;
  }
  return cached.conn;
};
