import { strings } from '../../strings';

import HttpException from './HttpException';
import { ExceptionCode } from './Code';

export default class BadRequestException extends HttpException {
  constructor(message?: string, code?: ExceptionCode) {
    super(400, message ?? strings.errorsBadRequest, code);
  }
}
