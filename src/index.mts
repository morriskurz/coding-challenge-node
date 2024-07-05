import express from "express";

const app = express();

const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

app.get("/api/test", (req, res) => {
  res.json({ message: "Test successful" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});