const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = "mongodb+srv://shafeen:tracetech@cluster0.vholsrs.mongodb.net/?appName=Cluster0";

const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const existing = await Admin.findOne({ username: "Tx" });
    if (existing) {
      console.log("Admin 'Tx' already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("887139", 10);
    await Admin.create({
      username: "Tx",
      password: hashedPassword,
    });

    console.log("Admin 'Tx' created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();
