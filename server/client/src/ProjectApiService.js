import Axios from "axios";
import FileDB from "./HttpCommon";
import { Component } from "react";

// front-end : port 3000
// back-end : port 8090 로 설정.

const ITEM = "http://localhost:8090/item";
const CATEGORY = "http://localhost:8090/category";
const MEMBER = "http://localhost:8090/member";

// spring boot back-end url.
const URL = "http://localhost:8090/project"; // https는 따로 알아보자.
const URL2 = "http://localhost:8090/discover";
const URL3 = "http://localhost:8090/discover/count";
// const URL4 = "http://localhost:8090";
const URL5 = "http://localhost:8090/detail";

//Discvoer에서 쓰는 url

const CATE = "http://localhost:8090/discover/category";

const ALIGN1 = "http://localhost:8090/discover/alignnew";
const ALIGN2 = "http://localhost:8090/discover/alignamountpercent";
const ALIGN3 = "http://localhost:8090/discover/alignfundamount";
const ALIGN4 = "http://localhost:8090/discover/aligndate";

const STATE1 = "http://localhost:8090/discover/stateing";
const STATE2 = "http://localhost:8090/discover/stateend";

const AMOUNT1 = "http://localhost:8090/discover/amountunder100";
const AMOUNT2 = "http://localhost:8090/discover/amount100to1000";
const AMOUNT3 = "http://localhost:8090/discover/amount1000to5000";
const AMOUNT4 = "http://localhost:8090/discover/amount5000toMillion";
const AMOUNT5 = "http://localhost:8090/discover/amountOverMillion";

const GOAL1 = "http://localhost:8090/discover/goalunder75";
const GOAL2 = "http://localhost:8090/discover/goalunder75to100";
const GOAL3 = "http://localhost:8090/discover/goalover100";

class ProjectApiService extends Component {
  /////////////////////////////////////////
  // Project table

  // http://localhost:8090/project
  // 전체 프로젝트들 가져오기
  fetch() {
    return Axios.get(URL);
  }

  // http://localhost:8090/project/1
  // id인 프로젝트 가져오기
  fetchBy(id) {
    return Axios.get(URL + "/" + id);
  }

  // 프로젝트 추가
  insert(project) {
    return Axios.post(URL, project);
  }

  // 프로젝트 갱신
  update(project) {
    return Axios.put(URL + "/" + project.id, project);
  }

  // id인 프로젝트 삭제.
  delete(id) {
    return Axios.delete(URL + "/" + id);
  }

  // project 테이블에서 columnName 값들을 구한다.
  getColumn(columnName) {
    return Axios.get(URL + "/col/" + columnName);
  }

  // project 테이블에서 columnName 값들을 구한다.
  getColumnBy(columnName, id) {
    return Axios.get(URL + "/col/" + columnName + "/" + id);
  }

  /////////////////////////////////////////
  // File table

  // upload project image file.
  upload(file) {
    console.log("upload...", file);
    let formData = new FormData();
    formData.append("file", file);
    return FileDB.post("", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  updateFile(file, id) {
    console.log("update...", file, id);
    let formData = new FormData();
    formData.append("file", file);
    return FileDB.put("/" + id, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  // get file from file table.
  getFile(id) {
    if (id === undefined || id === 0)
      return new Promise(() => {
        throw new Error(`There is NO file(id=${id})!`);
      });

    console.log(`getFile(id=${id})`);
    return FileDB.get("/" + id);
  }

  // download project image file.
  getFileOfProject(projectId) {
    console.log("getFileOfProject...", projectId);
    return FileDB.get("/project/" + projectId);
  }

  /////////////////////////////////////////
  // Category table
  getCategories() {
    console.log("getCategories...");
    return Axios.get(CATEGORY);
  }

  getCategory(id) {
    console.log("getCategory.id=", id);
    return Axios.get(CATEGORY + "/" + id);
  }

  /////////////////////////////////////////
  // Item table
  getItems() {
    return Axios.get(ITEM);
  }

  getItem(id) {
    return Axios.get(ITEM + "/" + id);
  }

  postItem(item) {
    return Axios.post(ITEM, item);
  }

  putItem(item) {
    return Axios.put(ITEM + "/" + item.id, item);
  }

  deleteItem(id) {
    return Axios.delete(ITEM + "/" + id);
  }

  /////////////////////////////////////////
  // test table
  getData(table) {
    return Axios.get(URL + "/" + table);
  }

  getDataBy(table, id) {
    return Axios.get(`${URL}/${table}/${id}`);
  }

  /////////////////////////////////////////
  //여기서부터 Discover에서 쓰는 것들//
  projectList() {
    return Axios.get(URL2);
  }

  countProject() {
    return Axios.get(URL3);
  }

  //카테고리별 분류
  categoryBy(category) {
    return Axios.get(CATE + "/" + category);
  }

  //필터별 분류
  alignNew() {
    return Axios.get(ALIGN1);
  }

  alignAmountPercent() {
    return Axios.get(ALIGN2);
  }

  alignFundAmount() {
    return Axios.get(ALIGN3);
  }

  alignDate() {
    return Axios.get(ALIGN4);
  }

  //상태별 분류
  stateIng() {
    return Axios.get(STATE1);
  }

  stateEnd() {
    return Axios.get(STATE2);
  }

  //달성률별 분류
  goalUnder75() {
    return Axios.get(GOAL1);
  }

  goalUnder75to100() {
    return Axios.get(GOAL2);
  }

  goalOver100() {
    return Axios.get(GOAL3);
  }

  //모인 금액별 분류
  amountUnder100() {
    return Axios.get(AMOUNT1);
  }

  amount100to1000() {
    return Axios.get(AMOUNT2);
  }

  amount1000to5000() {
    return Axios.get(AMOUNT3);
  }

  amount5000toMillion() {
    return Axios.get(AMOUNT4);
  }

  amountOverMillion() {
    return Axios.get(AMOUNT5);
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
