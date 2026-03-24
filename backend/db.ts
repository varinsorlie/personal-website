import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    db = client.db(process.env.DB_NAME);
  }

  return db;
}