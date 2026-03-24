import { connectDB } from "./backend/db.js";
import { allLists } from "./frontend/src/components/list-data.js";

async function seed() {
  try {
    const db = await connectDB();
    const collection = db.collection("lists");

    console.log("🧹 Clearing old data...");
    await collection.deleteMany({});

    console.log("🌱 Inserting new data...");
    await collection.insertMany(allLists);

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    process.exit();
  }
}

seed();