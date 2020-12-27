import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5px",
    backgroundColor: "#4e78d0",
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>포텐터짐</Button>
        <Button>유머/정보</Button>
        <Button>축구</Button>
        <Button>쇼핑</Button>
        <Button>일반</Button>
        <Button>게임</Button>
        <Button>커뮤니티</Button>
        <Button>갤러리</Button>
        <Button>풋볼매니저</Button>
        <Button>피파</Button>
        <Button>2군</Button>
      </ButtonGroup>
    </div>
  );
}
