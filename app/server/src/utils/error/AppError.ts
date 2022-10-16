export interface AppErrorResponse {
    errorId: string;
    message: string;
}

export class AppError extends Error {
    public errorId: string;
    public statusCode: number;
    public publicMessage?: string;
    public internalMessage: string;

    constructor({
        statusCode,
        errorId,
        publicMessage,
        message
    }: {
        statusCode: number;
        errorId: string;
        publicMessage?: string;
        message: string;
    }) {
        super(message);

        this.errorId = errorId;
        this.statusCode = statusCode;
        this.publicMessage = publicMessage;
        this.internalMessage = message;
    }

    public toResponse(): AppErrorResponse {
        return {
            errorId: this.errorId,
            message: this.publicMessage || this.internalMessage
        };
    }
}