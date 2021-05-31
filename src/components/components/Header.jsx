import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import '@css/Header.css'

import { Button } from '@components/Button'

export const Header = ({title}) => {
  return(
    <header className="header lightMode animated-header">
      <div className="logo">
        <Link className="logo-link" to="/">{title}</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link className="link" to="/"><i className="fas fa-home"></i>Home</Link></li>
          <li><Link className="link" to="/profile-setting"><i className="fas fa-tachometer-alt"></i>Dashboard</Link></li>
          <li><Link className="link" to="/signout"><i className="far fa-address-book"></i>About</Link></li>
        </ul>
      </nav>
      <div className="btn">
        <Button label="Sign Up" />
        <Button label="Sign In" />
      </div>
    </header>
  )
}

Header.propTypes = {
  /**
   * Name of our App
   */
  title: PropTypes.string
}