import React from 'react';

export default function ExplorePage() {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__column">
          <a href="feed.html">
            <img src="/images/logo.png" />
          </a>
        </div>
        <div className="navigation__column">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="navigation__column">
          <ul className="navigations__links">
            <li className="navigation__list-item">
              <a href="explore.html" className="navigation__link">
                <i className="fa fa-compass fa-lg"></i>
              </a>
            </li>
            <li className="navigation__list-item">
              <a href="#" className="navigation__link">
                <i className="fa fa-heart-o fa-lg"></i>
              </a>
            </li>
            <li className="navigation__list-item">
              <a href="profile.html" className="navigation__link">
                <i className="fa fa-user-o fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main id="explore">
        <ul className="explore__users">
          <li className="explore__user">
            <div className="explore__user-column">
              <img src="/images/avatar.jpg" className="explore__avatar" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
          <li className="explore__user">
            <div className="explore__user-column">
              <img src="/images/avatar.jpg" className="explore__avatar" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
          <li className="explore__user">
            <div className="explore__user-column">
              <img src="/images/avatar.jpg" className="explore__avatar" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
        </ul>
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
