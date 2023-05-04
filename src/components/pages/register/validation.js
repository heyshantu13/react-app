import * as Yup from 'yup';

const RegistervalidationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  })

  export default RegistervalidationSchema;