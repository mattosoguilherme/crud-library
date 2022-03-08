import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private async database(): Promise<void> {
    await mongoose
      .connect(
        `mongodb+srv://root:guilherme@cluster0.ok1ib.mongodb.net/library`
      )
      .then((r) => {
        console.log("mongoDB conectado");
      })
      .catch((e) => {
        console.error(`deu ruim: ${e}`);
      });
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express;
