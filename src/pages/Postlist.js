import React from "react";
import { Grid, Image, Text, Button } from "../elements/index";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";

const Postlist = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post);
  console.log(paging);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <InfinityScroll
        callNext={() => {
          console.log("next");
        }}
        is_next={paging.next ? true : false}
        loading={is_loading}
      >
        {post_list.map((p, idx) => {
          if (user_info && p.user_info.user_id === user_info.uid) {
            return <Post key={p.id} {...p} is_me />;
          }
          return <Post key={p.id} {...p} />;
        })}
      </InfinityScroll>
    </React.Fragment>
  );
};

export default Postlist;
