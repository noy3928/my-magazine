import React from "react";

import { Grid, Image, Text, Button } from "../elements/index";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="65%"
        is_glass
        height="auto"
        maxHeight="700px"
        borderRadius="20px"
        // overhidden
        margin="0px 0px 20px 0px"
      >
        <Grid is_flex height="auto" padding="5px 15px">
          <Grid flex>
            <Image />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid flex alignItems="center" justifyContent="flex-end">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                padding="0px 0px 0px 7px"
                bold
                size="14px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid height="auto">
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid
          padding="16px 16px 0px 16px"
          height="5%"
          flex
          justifyContent="flex-start"
          is_flex
        >
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
        <Grid
          padding="16px 16px 0px 16px"
          height="auto"
          flex
          justifyContent="flex-start"
        >
          <Text>{props.contents}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "Jobs",
    user_profile:
      "https://preview.redd.it/u4vgnguacr471.jpg?width=960&crop=smart&auto=webp&s=9ea5b963ac93d3107747e7439f00cd0a2a096df6",
  },
  image_url:
    "https://cdn.dribbble.com/users/916023/screenshots/4347078/cosos_drbbble.png",
  contents: "안녕 친구들!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
