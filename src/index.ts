import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import buildingRoutes from "./routes/buildingRoutes";
import campusRoutes from "./routes/campusRoutes";

const app = express();
const port = 3000;
const db =
  "mongodb+srv://yeab7:baey321@cluster0.k0avwxd.mongodb.net/?retryWrites=true&w=majority";
const prefix = "/api/v1";

app.use(bodyParser.json());

app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/user`, userRoutes);
app.use(`${prefix}/building`, buildingRoutes);
app.use(`${prefix}/campus`, buildingRoutes);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
