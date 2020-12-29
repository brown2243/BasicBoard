import "./App.css";

import Router from "./Routers";
function App() {
  // 각 컴포넌트를 가져와 메인 화면을 구성함
  return (
    <div className="container">
      <Router />
      {/* <body>
        <Header />

        <main>
          <div className="main-content wrapper">
            <Router />
            <SideBar />
          </div>
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </body> */}
    </div>
  );
}

export default App;
