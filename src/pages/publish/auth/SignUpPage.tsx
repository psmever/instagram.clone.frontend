import React from 'react';

export default function SignUpPage() {
  return (
    <div className="container">
      <img className="logo_instagram" src="/images/loginLogo.png" alt="" />
      <div></div>
      <form action="" method="post">
        <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
        <button>
          <span></span>
          Facebook으로 로그인
        </button>
        <div>
          <div>---------</div>
          <div>또는</div>
          <div>---------</div>
        </div>
        <input
          type="email"
          className="input_signup"
          name="email"
          id="email"
          placeholder="이메일 주소"
        />
        <input
          type="text"
          className="input_signup"
          name="name"
          id="name"
          placeholder="성명"
        />
        <input
          type="text"
          className="input_signup"
          name="nickname"
          id="nickname"
          placeholder="사용자이름"
        />
        <input
          type="password"
          className="input_signup"
          name="password"
          id="password"
          placeholder="비밀번호"
        />
        <button id="btn_signup" disabled>
          가입
        </button>
      </form>
      <span className="email_input_check">이메일 계정이 이미 존재합니다.</span>
      <a href="/publish/auth/login" className="button_login">
        계정이 있으신가요? 로그인
      </a>
    </div>
  );
}
