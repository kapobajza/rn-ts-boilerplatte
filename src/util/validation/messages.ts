import { strings } from '../../strings';

export const validationMessages = {
  required: (field: string) => `${field} ${strings.validationMessagesRequired}`,
};
