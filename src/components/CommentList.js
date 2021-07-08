// import React from "react";
// import { Grid, Image, Text } from "../elements";

// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as commentActions } from "../redux/modules/comment";
// import CommentWrite from "./CommentWrite";

// const CommentList = (props) => {
//   const dispatch = useDispatch();
//   const comment_list = useSelector((state) => state.comment.list);
//   const { post_id } = props;

//   React.useEffect(() => {
//     //리스트가 없으면, dispatch를 해라.
//     if (!comment_list[post_id]) {
//       dispatch(commentActions.getCommentFB(post_id));
//     }
//   }, []);

//   if (!comment_list[post_id] || !post_id) {
//     return null;
//   }

//   return (
//     <React.Fragment>
//       <Grid padding="16px">
//         {comment_list[post_id].map((c) => {
//           return <CommentItem key={c.id} {...c} />;
//         })}
//       </Grid>
//     </React.Fragment>
//   );
// };

// CommentList.defaultProps = {
//   post_id: null,
// };

// export default CommentList;

// const CommentItem = (props) => {
//   const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
//     props;
//   return (
//     <Grid is_flex>
//       <Grid is_flex width="auto">
//         <Image shape="circle" />
//         <Text bold>{user_name}</Text>
//       </Grid>
//       <Grid is_flex margin="0px 4px">
//         <Text margin="0px">{contents}</Text>
//         <Text margin="0px">{insert_dt}</Text>
//       </Grid>
//     </Grid>
//   );
// };

// CommentItem.defaultProps = {
//   user_profile: "",
//   user_name: "mean0",
//   user_id: "",
//   post_id: 1,
//   contents: "귀여운 고양이네요!",
//   insert_dt: "2021-01-01 19:00:00",
// };
