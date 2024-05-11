require("dotenv").config();
import express, { Request, Response } from "express";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 3000;
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
