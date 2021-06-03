import NavigationLink from 'components/NavigationLink'
import {PAGE_ROUTES} from 'constants/pageRouter'
import {Star} from 'assets'
import HeaderMenuBar from 'modules/HeaderMenuBar'
import {NavigationListWrapper} from '../PresenationPage/PresentationPageStyles'
import Button from '@material-ui/core/Button';

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
          <Star></Star>
        </NavigationListWrapper>
      </HeaderMenuBar>
      <h1>
        Contact
      </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}

export default Contact