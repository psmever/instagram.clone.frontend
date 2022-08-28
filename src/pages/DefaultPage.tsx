import React from 'react';
import { Link } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <table className="type07">
      <tbody>
        <tr>
          <th scope="row">로그인</th>
          <td>
            <Link to="/auth/login">로그인</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">프로필</th>
          <td>
            <a href="profile.html" target="_blank">
              이동
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">feed</th>
          <td>
            <a href="feed.html" target="_blank">
              이동
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">explore</th>
          <td>
            <a href="explore.html" target="_blank">
              이동
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">edit-profile</th>
          <td>
            <a href="edit-profile.html" target="_blank">
              이동
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
