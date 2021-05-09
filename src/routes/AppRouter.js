import {Switch, Route, Redirect} from 'react-router-dom'

import pageRoutes from  '../constants/pageRouter'
import {Page404, PresentationPage} from '../pages'

function AppRouter() {
    return (
        <Switch>
            {/*List of routes in app*/}
            <Route exact from="/" to={pageRoutes.PRESENTATION}>
                <PresentationPage/>
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