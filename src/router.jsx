import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomepagePage from '@pages/Homepage'
import SignupPage from '@pages/Signup'
import SigninPage from '@pages/Signin'
import SignoutPage from '@pages/Signout'
import ErrorPage from '@pages/Error'

export default function Router(){
  return(
    <Fragment>
      <Switch>
        <Route path="/" exact component={HomepagePage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/signout" exact component={SignoutPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Fragment>
  )
}