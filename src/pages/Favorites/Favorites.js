import Airplanes from "modules/AirPlanes";
import HeaderMenuBar from "modules/HeaderMenuBar";
import {NavigationListWrapper} from "pages/PresenationPage/PresentationPageStyles";
import NavigationLink from "components/NavigationLink";
import {PAGE_ROUTES} from "constants/pageRouter";
import {Star} from "assets";
import {useSelector} from "react-redux";

function Favorites() {
  const airplanes = useSelector(state => state.airplanes.directions)
  console.log(airplanes)
  const airplanesFav = airplanes.filter((airplane) => airplane.fly === true)

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
        Favorites
      </h1>
      <Airplanes airplanes={airplanesFav}/>
    </div>
  )
}

export default Favorites