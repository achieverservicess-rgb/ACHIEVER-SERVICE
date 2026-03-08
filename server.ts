import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("loan_db.sqlite");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT,
    loan_type TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.post("/api/applications", (req, res) => {
    const { name, phone, email, address, loan_type, amount } = req.body;
    
    if (!name || !phone || !loan_type || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const stmt = db.prepare(
        "INSERT INTO applications (name, phone, email, address, loan_type, amount) VALUES (?, ?, ?, ?, ?, ?)"
      );
      const info = stmt.run(name, phone, email, address, loan_type, amount);
      res.status(201).json({ id: info.lastInsertRowid, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });

  app.get("/api/applications", (req, res) => {
    try {
      const stmt = db.prepare("SELECT * FROM applications ORDER BY created_at DESC");
      const applications = stmt.all();
      res.json(applications);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
