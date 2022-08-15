import express from "express";
import cors from "cors";

const app = express();

// Setup CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://studio.apollographql.com",
    ],
  })
);

export default app;
