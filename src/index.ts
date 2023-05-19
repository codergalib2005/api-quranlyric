import connectDB from "./connect/connectDB";
import app from "./server";
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB;
    console.log('connected')
  } catch (err) {
    console.log(err);
  }
};
start();
app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
