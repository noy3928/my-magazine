import React from "react";
import { storage } from "./firebase";
import { Button, Grid } from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useSelector, useDispatch } from "react-redux";

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <React.Fragment>
      <Grid is_flex>
        <input
          className="fileupload"
          type="file"
          ref={fileInput}
          onChange={selectFile}
        />
      </Grid>
    </React.Fragment>
  );
};

export default Upload;
