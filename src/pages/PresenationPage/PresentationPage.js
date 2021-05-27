import Buttons from "../../components/Buttons";
import Text from "../../components/Text";
import NavigationLink from '../../components/NavigationLink'
import {useState} from 'react';
import pageRouter from '../../constants/pageRouter'
import Link from "../../components/Link";
import RoundButtons from "../../components/RoundButtons";
import {Menu, Star, Add, East, Notification} from '../../assets'
import "./PresentationPage.css"
import Spiner from '../../components/Spiner'
import colors from '../../styles/colors'
import {AddIcon, StarFilledIcon, StarUnFilledIcon, NavigationListWrapper} from './PresentationPageStyles'
import HeaderMenuBar from '../../modules/HeaderMenuBar'
import InputText from "../../components/InputText";
import {BUTTON_SIZE} from "../../constants/buttonSizes";
import {useFormik} from "formik";
import {formikConfig} from './data'

function PresentationPage() {
    const handleSubmitForm = (data, formikHelpers) => {
        console.log(data)
        console.log(formikHelpers)
        formikHelpers.resetForm()
    }

    const formik = useFormik({
        ...formikConfig,
        onSubmit: handleSubmitForm,
    })
    console.log(formik)

    const [buttonState, setButtonState] = useState(false);

    const handleClick = () => {
        setButtonState(!buttonState);
    }

    return (
        <div>
            <HeaderMenuBar>
                <NavigationListWrapper>
                    <NavigationLink href={pageRouter.PRESENTATION}>Presentation</NavigationLink>
                    <NavigationLink href={pageRouter.HOME}>Home</NavigationLink>
                    <NavigationLink href={pageRouter.PROFILE}>Profile</NavigationLink>
                    <NavigationLink href={pageRouter.SIGN_IN}>Sign in</NavigationLink>
                    <NavigationLink href={pageRouter.CONTACT}>Contact</NavigationLink>
                    <Star></Star>
                </NavigationListWrapper>
            </HeaderMenuBar>
            <h1>
                Presentation Page
            </h1>

            <div className="buttonBox">
                <Buttons text={'Primary'}
                         color={colors.PRIMARY}>
                </Buttons>
                <Buttons text={'Continue'}
                         children={<AddIcon/>}>
                </Buttons>
                <Buttons text={'Previos step'}/>
                <Buttons text={'Create new'}/>
                <Buttons text={'Primary'}/>

                <Buttons color={colors.DARK}
                         text={'Own the zone'}
                         onClick={handleClick}
                >
                    {buttonState ? <StarFilledIcon/> : <StarUnFilledIcon/>}
                </Buttons>
                <Buttons children={<Spiner/>}></Buttons>
            </div>
            <hr/>
            <hr/>

            {/*Text*/}
            <Text variant='h1' styleVariant={'header'}>Heading 1</Text>
            <Text variant='h2'>Heading 2</Text>
            <Text variant='h3'>Heading 3</Text>
            <Text variant='h4'>Heading 4</Text>
            <Text styleVariant={'bigP'}>Tristique tellus ultrices lacus facilisi purus dictum a rutrum adipiscing,
                vestibulum nam senectus
                pretium sapien maximus habitasse natoque laoreet, gravida pharetra lorem inceptos euismod vulputate nunc
                massa.</Text>
            <Text variant='description' styleVariant={'smallP'}>Lorem ipsum dolor sit amet consectetur adipiscing elit
                nullam, facilisi cursus
                lacinia a faucibus montes eu porttitor, nostra phasellus conubia blandit justo dapibus rutrum. Tristique
                magna aliquam eleifend duis pellentesque facilisi nibh porta varius himenaeos, hac inceptos mollis
                efficitur dapibus condimentum dis sit integer euismod nostra, feugiat hendrerit congue taciti primis nec
                rutrum ligula blandit. </Text>
            <hr/>
            <hr/>

            {/*Links*/}
            <div className='linksBox'>
                <Link styleVariant={'linkPrimary'} text={'Link Primary'}/>
                <Link styleVariant={'linkSecondary'} text={'Link Secondary'}/>
                <Link styleVariant={'linkDisabled'} text={'Link Disabled'}/>
                <Link styleVariant={'linkDestructive'} text={'Link Destructive'}/>
            </div>

            <hr/>
            <hr/>

            {/*RoundButtons*/}
            <div>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>

            <div className='Grey'>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>
            <hr/>
            <form onSubmit={formik.handleSubmit}>
                <InputText
                    error={formik.errors.firstName}
                    name='firstName'
                    placeholder='Enter your name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}>
                </InputText>
                <InputText
                    error={formik.errors.lastName}
                    name='lastName'
                    placeholder='Enter your surname'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}>
                </InputText>
                <Buttons
                    color={colors.PRIMARY}
                    size={BUTTON_SIZE.big}
                    text='Submit'
                    type='submit'>
                </Buttons>
            </form>
        </div>
    )
}

export default PresentationPage