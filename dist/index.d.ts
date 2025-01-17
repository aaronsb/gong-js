export * from './generated';
export declare const VERSION = "1.0.0";
export declare function createGongClient(accessToken: string, baseUrl?: string): {
    configuration: {
        basePath: string;
        accessToken: string;
    };
};
