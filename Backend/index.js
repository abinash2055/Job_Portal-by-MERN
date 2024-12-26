import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

// To connect MongoDB
dotenv.config({});

const app = express();

// For Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// For URL
const corsOptions = {
  // Allow only this origin
  origin: "*",

  // Specify allowed methods
  methods: ["GET", "POST", "PUT", "DELETE"],

  // Specify allowed headers
  allowedHeaders: ["Content-Type", "Authorization"],

  // Allow credentials (cookies, etc.)
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// For API's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started running at port number ${PORT}`);
});
