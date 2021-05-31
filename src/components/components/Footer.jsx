// import '@css/Footer.css'

export const Footer = () => {
  return(
    <footer className="footer animated-footer">
      <div className="footer-sections">
        <section className="section detail">
          <div className="title">
            <div>Heartious</div>
          </div>
          <div className="contact">
            <div>Contact Us</div>
            <p>Light Industrial Unit - 4, C-9 - United Arab Emirates</p>
            <button className="btn">Email Us</button>
          </div>
        </section>
        <section className="section technology">
          <div className="media">
            <h1>Technology</h1>
          </div>
          <ul>
            <li>Web Development</li>
            <li>Internet of Things</li>
            <li>Artificial Intelligence</li>
          </ul>
        </section>
      </div>
      <div className="separator"></div>
      <div className="footer-companymark">
        <div className="copyright">
          ©2021 copyright. All rights reserved
        </div>
        <div className="policy-termsofuse">
          <a href="/">Privacy</a> | <a href="/">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}