import React from 'react';

export default function ProfilePage() {
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
      <main id="profile">
        <header className="profile__header">
          <div className="profile__column">
            <img src="/images/avatar.jpg" />
          </div>
          <div className="profile__column">
            <div className="profile__title">
              <h3 className="profile__username">psmever</h3>
              <a href="edit-profile.html">Edit profile</a>
              <i className="fa fa-cog fa-lg"></i>
            </div>
            <ul className="profile__stats">
              <li className="profile__stat">
                게시물 <span className="stat__number">333</span>
              </li>
              <li className="profile__stat">
                팔로워 <span className="stat__number">1234</span>
              </li>
              <li className="profile__stat">
                팔로우 <span className="stat__number">36</span>
              </li>
            </ul>
            <p className="profile__bio">
              <span className="profile__full-name">just gram</span>
              당신은 무엇을 가지고 다니십니까
              <br />
              <br />
              사랑을 가지고 가는 자는
              <br />
              가는 곳곳마다 친구가 있고
              <br />
              <br />
              선을 가지고 가는 자는
              <br />
              가는 곳곳마다 외롭지 않고
              <br />
              <br />
              정의를 가지고 가는 자는
              <br />
              가는 곳곳마다 함께 하는 자가 있고
              <br />
              <br />
              진리를 가지고 가는 자는
              <br />
              가는 곳곳마다 듣는 사람이 있이다
              <br />
              <br />
              <a href="#">justgram.nicepage.pe.kr</a>
            </p>
          </div>
        </header>
        <section className="profile__photos">
          <div className="profile__photo">
            <img src="/images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="/images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="/images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="/images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>
        </section>
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
