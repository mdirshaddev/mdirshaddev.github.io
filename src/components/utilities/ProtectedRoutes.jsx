import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoutes = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}