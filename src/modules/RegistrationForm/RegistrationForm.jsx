import {RegistrationFormStyled, StyledInputText} from './RegistrationFormStyled'

import {useFormik} from "formik";
import {formikConfig} from "./data";
import Buttons from "components/Buttons";
import {BUTTON_SIZE} from "constants/buttonSizes";
import {colors} from "styles";

function RegistrationForm() {

  const handleSubmitForm = (data, formikHelpers) => {
    console.log(data)
    console.log(formikHelpers)
    formikHelpers.resetForm()
  }

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  })
  return (
    <RegistrationFormStyled onSubmit={formik.handleSubmit}>
      <StyledInputText
        style={{marginTop: '20px'}}
        label='First Name'
        error={formik.errors.firstName}
        name='firstName'
        placeholder='Enter your name'
        variant="outlined"
        value={formik.values.firstName}
        onChange={formik.handleChange}>
      </StyledInputText>
      <StyledInputText
        style={{marginTop: '20px'}}
        label='Last Name'
        error={formik.errors.lastName}
        name='lastName'
        placeholder='Enter your surname'
        variant="outlined"
        value={formik.values.lastName}
        onChange={formik.handleChange}>
      </StyledInputText>
      <StyledInputText
        style={{marginTop: '20px'}}
        label='Password'
        error={formik.errors.password}
        maxLength={8}
        name='password'
        type='text'
        placeholder='Enter your password'
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}>
      </StyledInputText>
      <Buttons
        gradient={colors.GRADIENT}
        size={BUTTON_SIZE.big}
        color={'hsl(130deg, 100%, 40%)'}
        text='Submit'
        type='submit'>
      </Buttons>
    </RegistrationFormStyled>
  )
};

export default RegistrationForm;