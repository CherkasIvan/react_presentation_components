import NavigationLink from 'components/NavigationLink'
import {PAGE_ROUTES} from 'constants/pageRouter'
import {Star} from 'assets'
import HeaderMenuBar from 'modules/HeaderMenuBar'
import {NavigationListWrapper} from 'pages/SignIn/SignInStyles'
import Text from "components/Text";
import RegistrationForm from "modules/RegistrationForm";

function SignIn() {
  return (
    <div>
      <HeaderMenuBar>
        <NavigationListWrapper>
          <NavigationLink href={PAGE_ROUTES.PRESENTATION}>Presentation</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.HOME}>Home</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.PROFILE}>Profile</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.SIGN_IN}>Sign in</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.CONTACT}>Contact</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.FAVORITES}>Favorites</NavigationLink>
          <Star></Star>
        </NavigationListWrapper>
      </HeaderMenuBar>
      <Text variant='h1' styleVariant={'Sign in '}>Login form</Text>
      <RegistrationForm></RegistrationForm>

    </div>
  )
}

export default SignIn