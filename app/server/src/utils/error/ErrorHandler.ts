import { ErrorRequestHandler } from 'express';
import { AppError, AppErrorResponse } from './AppError';
import { ParamsDictionary } from 'express-serve-static-core';
import { ERROR_CODE } from './errorCodes';
import { HttpStatusCode } from 'shared';

const errorHandler: ErrorRequestHandler<ParamsDictionary, AppErrorResponse> = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).send(error.toResponse());
    }

    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({
        errorId: error.errorId || ERROR_CODE.DEFAULT_APP_GENERIC_ERROR_ID,
        message: error.publicMessage || error.internalMessage || ERROR_CODE.DEFAULT_APP_GENERIC_ERROR_MESSAGE
    });
};

export default errorHandler;