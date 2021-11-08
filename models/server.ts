import express, { Application } from "express";
import cors from "cors";
import testRouter from "../routes/test";

class Server {
  //El tipo de variables
  private app: Application;
  private port: string;

  private apiPath = {
    test: "/api/test",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    //Se llmana los middlewares
    this.middlewares();

    //Se llaman las rutas
    this.routes();
  }

  middlewares() {
    //Cors
    this.app.use(cors());

    //Lectura del body en json
    this.app.use(express.json());

    //Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPath.test, testRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Online");
    });
  }
}

export default Server;
