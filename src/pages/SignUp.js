import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    console.log(id, pwd, user_name);

    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid
        margin="20px 0px 0px 0px"
        padding="16px"
        font="GmarketL"
        is_glass
        width="80%"
        height="90%"
        borderRadius="20px"
      >
        <Text size="32px" bold font="GmarketB">
          Sign Up
        </Text>

        <Grid padding="10px 0px" height="auto">
          <Input
            borderRadius="30px"
            placeholder="Email"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="10px 0px" height="auto">
          <Input
            borderRadius="30px"
            placeholder="Username"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px" height="auto">
          <Input
            borderRadius="30px"
            placeholder="Password"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px" height="auto" margin="0px 0px 40px 0px">
          <Input
            borderRadius="30px"
            placeholder="Password Check"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>

        <Button
          is_glass
          width="60%"
          borderRadius="30px"
          text="Sign Up"
          margin="0px 0px 20px 0px"
          _onClick={() => {
            signup();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
