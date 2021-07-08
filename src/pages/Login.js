import React from "react";
import { Text, Input, Grid, Button } from "../elements";
// import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import { history } from "../redux/configureStore";
import { setCookie } from "../shared/Cookie";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    // console.log(id, pwd);
    // setCookie("user_id", id, 3);
    // setCookie("user_pwd", pwd, 3);

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid
        margin="50px 0px 0px 0px"
        padding="16px"
        font="GmarketL"
        is_glass
        width="80%"
        height="80%"
        borderRadius="20px"
      >
        <Text size="32px" bold font="GmarketB">
          Welcome
        </Text>

        <Grid padding="16px 0px" height="auto">
          <Input
            borderRadius="30px"
            placeholder="Email"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px" height="auto" margin="0px 0px 40px 0px">
          <Input
            borderRadius="30px"
            placeholder="Password"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            is_submit
            onSubmit={login}
          />
        </Grid>

        <Button
          is_glass
          width="60%"
          borderRadius="30px"
          text="Login"
          margin="0px 0px 20px 0px"
          _onClick={() => {
            login();
          }}
        ></Button>
        <Text
          pointer
          size="12px"
          _onClick={() => {
            history.push("/signup");
          }}
        >
          Sign Up
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
