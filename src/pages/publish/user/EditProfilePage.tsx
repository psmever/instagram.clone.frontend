import React from 'react';

export default function EditProfilePage() {
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
      <main id="edit-profile">
        <div className="edit-profile__container">
          <header className="edit-profile__header">
            <div className="edit-profile__avatar-container">
              <img src="/images/avatar.jpg" className="edit-profile__avatar" />
            </div>
            <h4 className="edit-profile__username">gram</h4>
          </header>
          <form action="" className="edit-profile__form">
            <div className="form__row">
              <label htmlFor="full-name" className="form__label">
                Name:
              </label>
              <input id="full-name" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="user-name" className="form__label">
                Username:
              </label>
              <input id="user-name" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="website" className="form__label">
                Website:
              </label>
              <input id="website" type="url" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="bio" className="form__label">
                Bio:
              </label>
              <textarea id="bio"></textarea>
            </div>
            <div className="form__row">
              <label htmlFor="email" className="form__label">
                Email:
              </label>
              <input id="email" type="email" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="phone" className="form__label">
                Phone Number:
              </label>
              <input id="phone" type="tel" className="form__input" />
            </div>
            <div className="form__row">
              <label htmlFor="gender" className="form__label">
                Gender:
              </label>
              <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="cant">Can't remember</option>
              </select>
            </div>
            <input type="submit" value="Submit" />
          </form>
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
