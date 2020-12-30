import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5px",
  },
}));

function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            전체 게시판
          </Link>
        </Button>
        <Button>
          <Link to="/write" style={{ color: "white", textDecoration: "none" }}>
            글 작성하기
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default withRouter(BasicButtonGroup);
