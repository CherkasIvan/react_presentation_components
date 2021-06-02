import NavigationLink from '../../components/NavigationLink'
import pageRouter from '../../constants/pageRouter'
import {Star} from '../../assets'
import HeaderMenuBar from '../../modules/HeaderMenuBar'
import {NavigationListWrapper} from '../PresenationPage/PresentationPageStyles'
import Text from "../../components/Text";

import RegistrationForm from "../../modules/RegistrationForm";

function SignIn() {
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
            <Text variant='h1' styleVariant={'Sign in '}>Login form</Text>
            <RegistrationForm></RegistrationForm>
        </div>
    )
}
export default SignIn