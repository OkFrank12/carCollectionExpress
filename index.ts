import express, { Application, Request, Response } from "express";
import cors from "cors";
import cars from "./router/carsRouter";

const port: number = 6000;

const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/data", cars)

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on the car collection services endpoint",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Not Found",
        data: error,
      });
    }
  });

const server = app.listen(port, () => {
  console.log("Server is live on cars");
});

process.on("uncaughtException", (err: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
