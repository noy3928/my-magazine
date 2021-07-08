import React from "react";
import _ from "lodash";

//함수형 컴포넌트들의 특징. 초기화가 된다.온체인지가ㅏ 일어날 때, 그때 다시 함수가 초기화되기 때문에,
const Search = () => {
  const [text, SetText] = React.useState("");
  const debounce = _.debounce((e) => {
    console.log("debounce:::", e.target.value);
  }, 1000);
  const keyPress = React.useCallback(debounce, []); //함수를 메모이제이션 해둔다.함수를 어딘가에 기억을 해둔다.컴포넌트가 리랜더링이 되어도, 이 안에 저장된 함수는 초기화하지 말라는 것이다. 대신에 첫번째 파라미터에 들어간 함수와, 두번째 파라미터에 들어간 값이 변할 때마다, 리 랜더링을 해주겠다는 의미이다. 함수형 컴포넌트일때만 사용이 가능하다.

  const onChange = (e) => {
    SetText(e.target.value);
    debounce(e);
  };

  const throttle = _.throttle((e) => {
    console.log("throttle:::", e.target.value);
  }, 1000);

  return (
    <div>
      <input type="text" onChange={onChange} value={text}></input>
    </div>
  );
};

export default Search;
