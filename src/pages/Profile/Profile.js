import NavigationLink from 'components/NavigationLink'
import {PAGE_ROUTES} from 'constants/pageRouter'
import {Star} from 'assets'
import HeaderMenuBar from '../../modules/HeaderMenuBar'
import {NavigationListWrapper} from '../PresenationPage/PresentationPageStyles'

function Profile() {
  return (
    <div>
      <HeaderMenuBar>
        <NavigationListWrapper>
          <NavigationLink href={PAGE_ROUTES.PRESENTATION}>Presentation</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.HOME}>Home</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.PROFILE}>Profile</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.SIGN_IN}>Sign in</NavigationLink>
          <NavigationLink href={PAGE_ROUTES.CONTACT}>Contact</NavigationLink>
          <Star></Star>
        </NavigationListWrapper>
      </HeaderMenuBar>
      <h1>
        Profile
      </h1>
    </div>
  )
}

export default Profile