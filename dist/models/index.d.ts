declare class MongoConnection {
    private readonly mongoUri;
    constructor();
    connect(): Promise<void>;
}
export declare const dbhost: MongoConnection;
export {};
//# sourceMappingURL=index.d.ts.map