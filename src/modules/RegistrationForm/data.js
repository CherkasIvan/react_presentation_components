import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'min 2')
    .max(10, 'max 10')
    .required('required'),
  lastName: Yup.string()
    .min(1, 'min 1')
    .max(10, 'max 10')
    .required('required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[A-Z0-9]+/, 'Password can only contain Latin letters or numbers.')
    .required('No password provided.')
});

export const formikConfig = {
  initialValues: {
    firstName: '',
    lastName: '',
    password: ''
  },
  onSubmit: () => {
  },
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
  validationSchema: validationSchema,
};