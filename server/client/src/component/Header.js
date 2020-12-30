import React from "react";

import HeaderBtn1 from "./HeaderBtn1";
import HeaderBtn2 from "./HeaderBtn2";

function Header() {
  // 각 컴포넌트를 가져와 메인 화면을 구성함
  return (
    <header className="header">
      <div className="beforeHeader">
        <div className="wrapper1">
          <span>Hello! Mr.Wang!!!</span>
          <span>
            내 정보 | 내 글 | 내 댓글 | 쪽지함 | 레벨 : x | 로그아웃 | 다크OFF
          </span>
        </div>
      </div>
      <div className="display">
        <div className="wrapper1">
          <span id="logo">왕인서코리아</span>
          <span>검색 버튼 위치</span>
        </div>
        <div className="wrapper1 blue">
          <HeaderBtn1 />
          <HeaderBtn2 />
        </div>
      </div>
    </header>
  );
}
export default Header;
