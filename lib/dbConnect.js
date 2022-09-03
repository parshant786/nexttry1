// /lib/dbConnect.js
import mongoose from "mongoose";



const MONGODB_URI = process.env.MONGODB_URI;
console.log(">.>>>>"+MONGODB_URI)

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
      console.log(".....1"+ cached.conn);
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
console.log("...2")
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log(".....q"+mongoose)
      return mongoose;
      C
    });
  }
  cached.conn = await cached.promise;
  console.log(`>>>>>>3`)
  return cached.conn;
}

export default dbConnect;
