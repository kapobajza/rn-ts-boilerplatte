import { strings } from '../../strings';

import HttpException from './HttpException';
import { ExceptionCode } from './Code';

export default class NotFoundException extends HttpException {
  constructor(message?: string, code?: ExceptionCode) {
    super(404, message ?? strings.errorsNotFound, code);
  }
}
