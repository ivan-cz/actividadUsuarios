"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NOSQL_HOST = exports.DB_NOSQL_PASS = exports.DB_NOSQL_USER = exports.DB_NOSQL_NAME = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.PREFIX_NAME = exports.NODE_ENV = exports.PORT = void 0;
exports.PORT = process.env.PORT
    ? parseInt(process.env.PORT)
    : 8080;
exports.NODE_ENV = process.env.NODE_ENV || "development";
exports.PREFIX_NAME = exports.NODE_ENV === "production" ? "" : "-DEV";
exports.DB_NAME = process.env.DB_NAME || "A01752903";
exports.DB_USER = process.env.DB_USER || "root";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "Password1234";
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_NOSQL_NAME = process.env.DB_NOSQL_NAME || "test";
exports.DB_NOSQL_USER = process.env.DB_NOSQL_USER || "admin";
exports.DB_NOSQL_PASS = process.env.DB_NOSQL_PASS || "Password1234";
exports.DB_NOSQL_HOST = "100.31.207.226";
//# sourceMappingURL=index.js.map