import {Redirect, Route, Switch} from 'react-router-dom'

import {PAGE_ROUTES} from '../constants/pageRouter'
import {Contact, Home, Page404, PresentationPage, Profile, SignIn} from '../pages'

function AppRouter() {
  return (
    <Switch>
      {/*List of routes in app*/}
      <Route exact path={PAGE_ROUTES.PRESENTATION}>
        <PresentationPage/>
      </Route>

      <Route exact path={PAGE_ROUTES.CONTACT}>
        <Contact/>
      </Route>

      <Route exact path={PAGE_ROUTES.PROFILE}>
        <Profile/>
      </Route>

      <Route exact path={PAGE_ROUTES.HOME}>
        <Home/>
      </Route>

      <Route exact path={PAGE_ROUTES.SIGN_IN}>
        <SignIn/>
      </Route>

      {/*Special case: redirect to sign in from root page*/}
      <Redirect exact from="/" to={PAGE_ROUTES.PRESENTATION}/>

      <Route exact path={PAGE_ROUTES.NOT_FOUND}>
        {/*Special case: redirect to sign in from 404*/}
        <Page404/>
      </Route>

    </Switch>
  )
}

export default AppRouter