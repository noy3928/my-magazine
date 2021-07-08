import React from "react";
import Post from "./Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Permit from "../shared/Permit";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  //   const [post, setPost] = React.useState(post_data ? post_data : null);

  //   console.log(post);

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(postActions.getOnePostFB(id)); // 이건 리덕스에서 가지고 오고 있는 데이터이다.
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
      )}
      {/* //post.user_info.user_id === user_info.uid이게 지금 뭘 확인하는건지 모르겠다. 4-5 13분 */}
      <Permit>
        <CommentWrite post_id={id} />
      </Permit>
      <CommentList post_id={id} />
    </React.Fragment>
  );
};

export default PostDetail;
