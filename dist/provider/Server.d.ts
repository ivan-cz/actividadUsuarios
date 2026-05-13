import AbstractController from "../controllers/AbstractController";
declare class Server {
    private app;
    private port;
    private env;
    constructor(appInit: {
        port: number;
        env: string;
        middlewares: any[];
        controllers: AbstractController[];
    });
    private initMiddlewares;
    private initControllers;
    private connectDB;
    init(): void;
}
export default Server;
//# sourceMappingURL=Server.d.ts.map