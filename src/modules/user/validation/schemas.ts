import * as yup from 'yup';

import { strings } from '../../../strings';
import { validationMessages } from '../../../util';

import { AddUserField } from './fields';

export const addUserSchema = yup.object().shape({
  [AddUserField.Name]: yup
    .string()
    .trim()
    .required(validationMessages.required(strings.userNameField)),
});
