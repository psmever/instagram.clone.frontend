import React from 'react';

export default function LoginPage() {
  return (
    <>
      <main id="login">
        <div className="login__column">
          <img src="/images/phoneImage.png" className="login__phone" />
        </div>
        <div className="login__column">
          <div className="login__box">
            <img src="/images/loginLogo.png" className="login__logo" />
            <form action="feed.html" method="get" className="login__form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Log in" />
            </form>
            <span className="login__divider">or</span>
            <a href="#" className="login__link">
              <i className="fa fa-money"></i>
              Log in with Facebook
            </a>
            <a href="#" className="login__link login__link--small">
              Forgot password
            </a>
          </div>
          <div className="login__box">
            <span>Don't have an account?</span> <a href="#">Sign up</a>
          </div>
          <div className="login__box--transparent">
            <span>Get the app.</span>
            <div className="login__appstores">
              <img
                src="/images/ios.png"
                className="login__appstore"
                alt="Apple appstore logo"
                title="Apple appstore logo"
              />
              <img
                src="/images/android.png"
                className="login__appstore"
                alt="Android appstore logo"
                title="Android appstore logo"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__column">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Blog Front
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Blog Backend
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__column">
          <span className="footer__copyright">© 2020 JustGram</span>
        </div>
      </footer>
    </>
  );
}
