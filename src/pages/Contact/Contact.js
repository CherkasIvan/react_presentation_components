import NavigationLink from 'components/NavigationLink'
import {PAGE_ROUTES} from 'constants/pageRouter'
import {Star} from 'assets'
import HeaderMenuBar from 'modules/HeaderMenuBar'
import {NavigationListWrapper} from '../PresenationPage/PresentationPageStyles'

function Contact() {

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
      <h1>
        Contact
      </h1>
    </div>
  )
}

export default Contact