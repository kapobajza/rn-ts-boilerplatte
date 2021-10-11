import { ExceptionCode } from './Code';

export default class HttpException extends Error {
  statusCode: number;
  code: ExceptionCode | undefined;
  summary: string | undefined;

  constructor(
    statusCode: number,
    message: string | undefined,
    code?: ExceptionCode,
    summary?: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.summary = summary;
  }
}
