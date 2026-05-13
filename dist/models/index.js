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
exports.dbhost = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
class MongoConnection {
    constructor() {
        //mongodb://username:password@host:port/database?authSource=admin"
        this.mongoUri = `mongodb://${config_1.DB_NOSQL_USER}:${config_1.DB_NOSQL_PASS}@${config_1.DB_NOSQL_HOST}:27017/${config_1.DB_NOSQL_NAME}?authSource=admin`;
        console.log(this.mongoUri);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(this.mongoUri);
                console.log("Conexion exitosa");
            }
            catch (err) {
                console.log(err);
                process.exit(1);
            }
        });
    }
}
exports.dbhost = new MongoConnection();
//# sourceMappingURL=index.js.map