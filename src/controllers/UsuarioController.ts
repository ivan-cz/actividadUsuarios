import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { UsuarioModel } from "../models/Usuario";
export default class UsuarioController extends AbstractController {
  //Singleton
  //Atributos de clase
  private static _instance: UsuarioController;
  //Métodos de clase
  public static get instance(): UsuarioController {
    return this._instance || (this._instance = new this("Usuario"));
  }
  //Metodo de instancia
  protected initRoutes(): void {
    this.router.get("/listarUsuarios", this.getListarUsuarios.bind(this));
    this.router.post("/crearUsuario", this.postCrearUsuario.bind(this));
  }

  private async getListarUsuarios(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UsuarioModel.find().sort({ createdAt: -1 });

      console.log("Acceso a la ruta /listarUsuarios");
      res.status(200).json(usuarios);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  private async postCrearUsuario(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UsuarioModel.find().sort({ createdAt: -1 });
      await UsuarioModel.create(req.body);

      console.log("Acceso a la ruta /crearUsuario");
      res.status(200).json({ message: "Registro de proyecto exitoso" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
