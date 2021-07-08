// import React from "react";

// import { Grid, Input, Button } from "../elements";

// import { actionCreators as commentActions } from "../redux/modules/comment";
// import { useDispatch, useSelector } from "react-redux";

// const CommentWrite = (props) => {
//   const dispatch = useDispatch();
//   const [comment_text, setCommentText] = React.useState();

//   const { post_id } = props;
//   const onChange = (e) => {
//     setCommentText(e.target.value);
//   };

//   const write = () => {
//     dispatch(commentActions.addCommentFB(post_id, comment_text));
//     setCommentText("");
//   };

//   return (
//     <React.Fragment>
//       <Grid padding="16px" is_flex>
//         <Input
//           placeholder="댓글 내용을 입력해주세요 :)"
//           _onChange={onChange}
//           value={comment_text}
//           // value를 먹인 이유는 글씨가 제출되고 나면 지워지게 하기 위해서 그런 것이다.
//           onSubmit={write}
//           is_Submit
//         />
//         <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
//           작성
//         </Button>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default CommentWrite;
