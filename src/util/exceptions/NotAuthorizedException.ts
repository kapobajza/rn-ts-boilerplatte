import { strings } from '../../strings';

import HttpException from './HttpException';
import { ExceptionCode } from './Code';

export default class NotAuthorizedException extends HttpException {
  constructor(message?: string, code?: ExceptionCode) {
    super(401, message ?? strings.errorsNotAuthorized, code);
  }
}
