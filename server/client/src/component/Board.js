function Board() {
  // 각 컴포넌트를 가져와 메인 화면을 구성함
  return (
    <div className="main">
      <ul>
        <li className="li-board">
          <div>
            <div className="img"></div>
          </div>
          <div className="li-wrapper">
            <div className="title">큰 타이틀</div>
            <div className="category">카테고리 분류(나중에 구현)</div>
            <div className="sub-info">작성 된 시간 / 작성자</div>
          </div>
        </li>

        <li className="li-board">
          <div>
            <div className="img"></div>
          </div>
          <div className="li-wrapper">
            <div className="title">큰 타이틀</div>
            <div className="category">카테고리 분류(나중에 구현)</div>
            <div className="sub-info">작성 된 시간 / 작성자</div>
          </div>
        </li>

        <li className="li-board">
          <div>
            <div className="img"></div>
          </div>
          <div className="li-wrapper">
            <div className="title">큰 타이틀</div>
            <div className="category">카테고리 분류(나중에 구현)</div>
            <div className="sub-info">작성 된 시간 / 작성자</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Board;
