"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = __importDefault(require("./AbstractController"));
const Usuario_1 = require("../models/Usuario");
class UsuarioController extends AbstractController_1.default {
    //Métodos de clase
    static get instance() {
        return this._instance || (this._instance = new this("Usuario"));
    }
    //Metodo de instancia
    initRoutes() {
        this.router.get("/listarUsuarios", this.getListarUsuarios.bind(this));
        this.router.post("/crearUsuario", this.postCrearUsuario.bind(this));
    }
    getListarUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Usuario_1.UsuarioModel.find().sort({ createdAt: -1 });
                console.log("Acceso a la ruta /listarUsuarios");
                res.status(200).json(usuarios);
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        });
    }
    postCrearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Usuario_1.UsuarioModel.find().sort({ createdAt: -1 });
                yield Usuario_1.UsuarioModel.create(req.body);
                console.log("Acceso a la ruta /crearUsuario");
                res.status(200).json({ message: "Registro de proyecto exitoso" });
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        });
    }
}
exports.default = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map