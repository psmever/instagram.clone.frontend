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
          <th scope="row">feed</th>
          <td>
            <Link to="/post/feed">feed</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">프로필</th>
          <td>
            <Link to="/user/profile">프로필</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">explore</th>
          <td>
            <Link to="/user/explore">explore</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">edit-profile</th>
          <td>
            <Link to="/user/edit-profile">edit-profile</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
