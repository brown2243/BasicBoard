import { Component } from "react";
import "./Footer.css";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Kakao from "@material-ui/icons/ChatBubbleRounded";
import Instagram from "@material-ui/icons/Instagram";
import RssFeed from "@material-ui/icons/RssFeed";
import Help from "@material-ui/icons/Help";
import { Grid } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        width="md"
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
        }}
      >
        <div className="footer" style={{ marginBottom: "3rem" }}>
          <div className="contain">
            <div className="col">
              <ul style={{ textAlign: "left" }}>
                <li>공지사항</li>
                <li>채용</li>
                <li>창작자 가이드</li>
                <li>서비스 개선사항</li>
              </ul>
            </div>
            <div className="col">
              <ul style={{ textAlign: "left" }}>
                <li>이용약관</li>
                <li>개인정보 처리방침</li>
                <li>수수료 정책</li>
                <li>헬프센터</li>
              </ul>
            </div>

            <div
              className="col-md-18"
              style={{ float: "right", marginRight: "2rem" }}
            >
              <ul className="social-network social-circle">
                <li>
                  <Kakao />
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <RssFeed />
                </li>
              </ul>
              <ul style={{ listStyle: "none", marginTop: "1rem" }}>
                <li>
                  <button type="button" className="btn btn-outline-dark btn-sm">
                    <Help
                      color="disabled"
                      fontSize="small"
                      style={{ marginBottom: "2px" }}
                    />{" "}
                    문의하기
                  </button>
                </li>
              </ul>
            </div>

            <div
              className="clearfix"
              style={{
                fontSize: "9.5pt",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <span
                style={{
                  color: "#808080",
                  textAlign: "left",
                  marginBottom: "1.5rem",
                }}
              >
                텀블벅은 플랫폼 제공자로서 프로젝트의 당사자가 아니며, 직접적인
                통신판매를 진행하지 않습니다. 프로젝트의 완수 및 선물제공의
                책임은 해당 프로젝트의 창작자에게 있으며, 프로젝트와 관련하여
                후원자와 발생하는 법적 분쟁에 대한 책임은 해당 창작자가
                부담합니다.
              </span>

              <span
                style={{ color: "#808080", textAlign: "left", float: "left" }}
              >
                텀블벅(주) | 대표 염재승 105-87-52823 | 서울시 중구 청계천로
                100, 시그니쳐타워 9층 (수표동) | 통신판매업
                2019-3010165-30-2-02129 | 대표전화 02-6080-0760
              </span>
              <span
                style={{
                  color: "#808080",
                  textAlign: "left",
                  float: "right",
                  marginRight: "1rem",
                }}
              >
                © 2020 Tumblbug Inc.
              </span>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Footer;
