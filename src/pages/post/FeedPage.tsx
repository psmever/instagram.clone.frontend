import React from 'react';

export default function FeedPage() {
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
      <main id="feed">
        <div className="photo">
          <header className="photo__header">
            <img src="/images/avatar.jpg" className="photo__avatar" />
            <div className="photo__user-info">
              <span className="photo__author">psmever</span>
              <span className="photo__location">JustGram</span>
            </div>
          </header>
          <img src="/images/feedPhoto.jpg" />
          <div className="photo__info">
            <div className="photo__actions">
              <span className="photo__action">
                <i className="fa fa-heart-o fa-lg"></i>
              </span>
              <span className="photo__action">
                <i className="fa fa-comment-o fa-lg"></i>
              </span>
            </div>
            <span className="photo__likes">45 likes</span>
            <ul className="photo__comments">
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
            </ul>
            <span className="photo__time-ago">2 hours ago</span>
            <div className="photo__add-comment-container">
              <textarea
                name="comment"
                placeholder="Add a comment..."
              ></textarea>
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
        <div className="photo">
          <header className="photo__header">
            <img src="/images/avatar.jpg" className="photo__avatar" />
            <div className="photo__user-info">
              <span className="photo__author">psmever</span>
              <span className="photo__location">JustGram</span>
            </div>
          </header>
          <img src="/images/feedPhoto.jpg" />
          <div className="photo__info">
            <div className="photo__actions">
              <span className="photo__action">
                <i className="fa fa-heart-o fa-lg"></i>
              </span>
              <span className="photo__action">
                <i className="fa fa-comment-o fa-lg"></i>
              </span>
            </div>
            <span className="photo__likes">45 likes</span>
            <ul className="photo__comments">
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{' '}
                love this!
              </li>
            </ul>
            <span className="photo__time-ago">2 hours ago</span>
            <div className="photo__add-comment-container">
              <textarea
                name="comment"
                placeholder="Add a comment..."
              ></textarea>
              <i className="fa fa-ellipsis-h"></i>
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
