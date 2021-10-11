import {
  useForm as useFormDefault,
  FieldValues,
  UseFormProps,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

interface FormOptions<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
> extends UseFormProps<TFieldValues, TContext> {
  schema?: AnyObjectSchema;
}

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
>(options?: FormOptions<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext> {
  const { schema } = options ?? {};
  const { setValue, ...useFormProps } = useFormDefault<TFieldValues, TContext>({
    mode: 'all',
    ...options,
    resolver: schema ? yupResolver(schema) : undefined,
  });

  const customSetValue: UseFormSetValue<TFieldValues> = (name, value, options) => {
    setValue(name, value, { shouldDirty: true, shouldValidate: true, ...(options ?? {}) });
  };

  return {
    ...useFormProps,
    setValue: customSetValue,
  };
}
