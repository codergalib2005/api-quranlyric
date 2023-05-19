import express from "express";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main page
app.get("/", (req, res) => {
  res.send(`<h2>Blogger Application</h2>`);
});

// 

export default app;
