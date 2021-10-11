import * as yup from 'yup';

import { ManyFieldsForm } from './fields';

export const formSchema = yup.object().shape({
  [ManyFieldsForm.Field1]: yup.string().trim().required(),
  [ManyFieldsForm.Field2]: yup.string().trim().required(),
  [ManyFieldsForm.Field3]: yup.string().trim().required(),
  [ManyFieldsForm.Field4]: yup.string().trim().required(),
  [ManyFieldsForm.Field5]: yup.string().trim().required(),
  [ManyFieldsForm.Field6]: yup.string().trim().required(),
  [ManyFieldsForm.Field7]: yup.string().trim().required(),
  [ManyFieldsForm.Field8]: yup.string().trim().required(),
  [ManyFieldsForm.Field9]: yup.string().trim().required(),
  [ManyFieldsForm.Field10]: yup.string().trim().required(),
});
