import "./App.css";
import React from "react";
import Main from "../src/pages/Main";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import { apiKey } from "./shared/firebase";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <Main></Main>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: linear-gradient(
    109.6deg,
    rgba(218, 185, 252, 1) 11.2%,
    rgba(125, 89, 252, 1) 91.1%
  );
  // background-size: cover;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
