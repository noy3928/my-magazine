import React from "react";
import { Text } from "../elements/index";
import { history } from "../redux/configureStore";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { apiKey } from "../shared/firebase";

const Menulist = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_login);

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Text
          bold
          pointer
          _onClick={() => {
            dispatch(userActions.logoutFB({}));
          }}
        >
          Logout
        </Text>
        <Text
          pointer
          _onClick={() => {
            history.push("/");
          }}
        >
          Post List
        </Text>
        <Text
          pointer
          _onClick={() => {
            history.push("/write");
          }}
        >
          Write
        </Text>
        <Text
          pointer
          _onClick={() => {
            history.push("/noti");
          }}
        >
          Notification
        </Text>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Text
        bold
        pointer
        _onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </Text>
      <Text
        pointer
        _onClick={() => {
          history.push("/");
        }}
      >
        Post List
      </Text>
      <Text
        pointer
        _onClick={() => {
          history.push("/write");
        }}
      >
        Write
      </Text>
    </React.Fragment>
  );
};

export default Menulist;
