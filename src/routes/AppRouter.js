import {Switch, Route, Redirect} from 'react-router-dom'

import pageRoutes from  '../constants/pageRouter'
import {Page404, PresentationPage, Contact, Profile, SignIn, Home} from '../pages'

function AppRouter() {
    return (
        <Switch>
            {/*List of routes in app*/}
            <Route exact path={pageRoutes.PRESENTATION}>
                <PresentationPage/>
            </Route>

            <Route exact path={pageRoutes.CONTACT}>
                <Contact/>
            </Route>

            <Route exact path={pageRoutes.PROFILE}>
                <Profile/>
            </Route>

            <Route exact path={pageRoutes.HOME}>
                <Home/>
            </Route>

            <Route exact path={pageRoutes.SIGN_IN}>
                <SignIn/>
            </Route>

            {/*Special case: redirect to sign in from root page*/}
            <Redirect exact from="/" to={pageRoutes.NOT_FOUND}/>

            <Route>
                {/*Special case: redirect to sign in from 404*/}
                <Page404/>
            </Route>

        </Switch>
    )
}

export default AppRouter