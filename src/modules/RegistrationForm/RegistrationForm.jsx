import {RegistrationFormStyled} from './RegistrationFormStyled'
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import {formikConfig} from "../../pages/PresenationPage/data";
import InputText from "../../components/InputText";
import Buttons from "../../components/Buttons";
import colors from "../../styles/colors";
import {BUTTON_SIZE} from "../../constants/buttonSizes";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

function RegistrationForm() {

    const StyledInputText = styled(TextField)``;

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
        <RegistrationFormStyled>
            <form onSubmit={formik.handleSubmit}>
                <InputText
                    style={{marginTop: '20px'}}
                    label='First Name'
                    error={formik.errors.firstName}
                    name='firstName'
                    placeholder='Enter your name'
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}>
                </InputText>
                <InputText
                    style={{marginTop: '20px'}}
                    label='Last Name'
                    error={formik.errors.lastName}
                    name='lastName'
                    placeholder='Enter your surname'
                    variant="outlined"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}>
                </InputText>
                <InputText
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
                </InputText>
                <Buttons
                    size={BUTTON_SIZE.big}
                    color={'hsl(130deg, 100%, 40%)'}
                    text='Submit'
                    type='submit'>
                </Buttons>
                <ButtonGradient text='Submit'
                                width={BUTTON_SIZE.big}
                                type='submit'
                ></ButtonGradient>
            </form>
        </RegistrationFormStyled>
    )
};

export default RegistrationForm;