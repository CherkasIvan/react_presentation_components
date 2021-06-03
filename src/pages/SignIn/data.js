import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(1, 'min 1')
    .max(32, 'max 32')
    .required('required'),
  lastName: Yup.string()
    .min(2, 'min 2')
    .max(32, 'max 32')
    .required('required'),
});

export const formikConfig = {
  initialValues: {
    firstName: '',
    lastName: '',
  },
  onSubmit: () => {
  },
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
  validationSchema: validationSchema,
};