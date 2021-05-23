import NavigationLink from '../../components/NavigationLink'
import pageRouter from '../../constants/pageRouter'
import {Menu, Star, Add, East, Notification} from '../../assets'
import HeaderMenuBar from '../../modules/HeaderMenuBar'
import {AddIcon, StarFilledIcon, StarUnFilledIcon, NavigationListWrapper} from '../PresenationPage/PresentationPageStyles'
import Button from '@material-ui/core/Button';

function Contact() {
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
                Contact
            </h1>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
}
export default Contact