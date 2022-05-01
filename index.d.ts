import TransportStream from "winston-transport";

declare interface LokiTransportOptions extends TransportStream.TransportStreamOptions{
    host: string;
    basicAuth?: string;
    headers?: object;
    interval?: number;
    json?: boolean;
    batching?: boolean;
    labels?: object;
    clearOnError?: boolean,
    replaceOnError?: boolean,
    replaceTimestamp?: boolean,
    gracefulShutdown?: boolean,
    timeout?: number,
    path?: string
}

declare class LokiTransport extends TransportStream {

    constructor(opts: LokiTransportOptions);
}

export = LokiTransport;
