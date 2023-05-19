import app from "./server";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
