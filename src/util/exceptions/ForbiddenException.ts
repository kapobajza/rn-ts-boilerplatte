import { strings } from '../../strings';

import HttpException from './HttpException';
import { ExceptionCode } from './Code';

export default class NotAuthorizedException extends HttpException {
  constructor(message?: string, code?: ExceptionCode) {
    super(403, message ?? strings.errorsForbidden, code);
  }
}
