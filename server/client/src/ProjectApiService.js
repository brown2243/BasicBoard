import Axios from "axios";
import { Component } from "react";

// front-end : port 3000
// back-end : port 8000

const URL = "http://localhost:8000";

class ProjectApiService extends Component {
  boardfetch() {
    return Axios.get(URL);
  }

  // id인 프로젝트 가져오기
  boardfetchBy(id) {
    return Axios.get(URL + "/" + id);
  }

  // 글 추가
  boardinsert(item) {
    return Axios.post(URL + "/write", item);
  }

  // 글 갱신
  boardupdate(item) {
    return Axios.put(URL + "/" + item.id, item);
  }

  // id인 글 삭제.
  delete(id) {
    return Axios.delete(URL + "/" + id);
  }

  /////////////////////////////////////////
  //여기서부터 Member에서 쓰는 것들//
  login(userId) {
    return Axios.get(MEMBER + "/login/" + userId); // e-mail
  }

  join(member) {
    return Axios.post(MEMBER + "/join", member);
  }

  getUser(id) {
    if (id === undefined || id === 0)
      return new Promise(() => {
        throw new Error(`There is NO user(id=${id}) !`);
      });

    console.log(`getUser(id=${id})`);
    return Axios.get(MEMBER + "/" + id);
  }

  updateIntro(member) {
    return Axios.put(MEMBER + "/setting/" + member.id, member);
  }

  updateUser(member) {
    return Axios.put(MEMBER + "/" + member.id, member);
  }

  ////Detail 부분
  projectDetail() {
    return Axios.get(URL5);
  }
}

export default new ProjectApiService();
