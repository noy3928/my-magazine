import React from "react";
import { Grid, Text, Image, Input, Button } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image"; // 프리뷰를 넣기 위해서 가져온 액션

import uploadimg2 from "../image/upload2.png";

const Write = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  console.log(post_id);
  const is_edit = post_id ? true : false;

  const { history } = props;
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = React.useState(_post ? _post.contents : "");
  // const [contents, setContents] = React.useState("");

  console.log(contents);

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();

      return;
    }

    //수정모드일때만 미리보기 이미지를 가지고 오면 된다.
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
    console.log(contents);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const imageUpload = () => {
    document.querySelector(".fileupload").click();
  };

  //바뀐 정보까지 넘겨주기.
  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px">앗! 잠깐!</Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러 가기
        </Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid
        font="GmarketL"
        width="80%"
        is_glass
        padding="20px"
        borderRadius="20px"
        scroll
      >
        <Grid
          padding="0px"
          height="auto"
          flex
          justifyContent="center"
          margin="0px 0px 30px 0px"
        >
          <Text margin="0px" size="28px" bold>
            {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
        </Grid>
        <Grid height="auto">
          <Upload />
        </Grid>

        <Grid height="auto" margin="10px 0px 0px 0px">
          <Grid
            padding="0px"
            height="auto"
            flex
            justifyContent="flex-start"
          ></Grid>

          <Image
            width="40%"
            height="40%"
            shape="rectangle"
            _onClick={imageUpload}
            pointer
            src={preview ? preview : `${uploadimg2}`}
          />
        </Grid>

        <Grid padding="16px" height="auto">
          <Input
            value={contents}
            placeholder="게시글 작성"
            multiLine
            _onChange={changeContents}
          />
        </Grid>

        {/* 수정모드일때마다 뷰를 바꿔주기 */}
        <Grid
          padding="16px"
          height="auto"
          flex
          justifyContent="center"
          color="#fafafa"
        >
          {is_edit ? (
            <Button
              is_glass
              width="50%"
              text="수정하기"
              bold
              borderRadius="20px"
              _onClick={editPost}
            ></Button>
          ) : (
            <Button
              is_glass
              width="50%"
              text="작성하기"
              bold
              borderRadius="20px"
              _onClick={addPost}
            ></Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Write;
