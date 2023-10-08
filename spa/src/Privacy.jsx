function Privacy() {
  return (
    <div className="privacy">
      <h2>Website Privacy Policy</h2>
      <div className="policy">
        <p className="policy__title"><h3>We collect the following types of information from our users:</h3></p>
        <ul className="policy__list">
          <li className="policy__item">Personal information: This includes your name, email address, and any other information you provide to us when you sign up for our newsletter, fill out a contact form, or participate in a survey.</li>
          <li>
            Usage information: This includes information about how you use our website, such as the pages you visit, the time and date of your visit, and your IP address.
          </li>
          <li>
            Cookies: We may use cookies to track your usage of our website and improve your experience. Cookies are small text files that are stored on your device when you visit a website.
          </li>
        </ul>
      </div>
      <div className="policy">
        <p className="policy__title"><h3>How We Protect Your Information</h3></p>
        <ul className="policy__list">
          <li className="policy__item">
            We take the security of your personal information seriously and have implemented technical, administrative, and physical safeguards to protect your information from unauthorized access, disclosure, and use.
          </li>
          <li className="policy__item">
            We do not sell or rent your personal information to third parties. However, we may disclose your information to our partners and service providers for the purposes of providing our services to you.
          </li>

        </ul>
      </div>
      <div className="policy">
        <p className="policy__title"><h3>Changes to this Privacy Policy</h3></p>
        <p className="policy__item">We may update this Privacy Policy from time to time by posting a new version on our website. Your continued use of our website after we make changes indicates your agreement to the revised Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Privacy;