import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to a database';

    constructor(){
        super('Error connecting to DB');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}