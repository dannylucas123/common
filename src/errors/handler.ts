import {NextFunction,Response,Request} from "express";
import {CustomError} from "./custom-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serialize())
  }

  return res.status(500).send({message: 'unknown error'});
}
