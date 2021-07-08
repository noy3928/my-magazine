import React from "react";
import { Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = React.useState(true);
  const user_id = useSelector((state) => state.user.user.uid);
  console.log(user_id);
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  console.log("유저아이디확인", user_id);

  //함수형에서 구독하기 위해서는 useEffect를 사용함
  React.useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`); // noti/이렇게 적는것은 그 아래의 경로로 들어가겠다는 말.

    notiDB.on("value", (snapshot) => {
      //값이 바뀌었을 떄의 동작이 여기에 들어감.
      console.log(snapshot.val());
      setIsRead(snapshot.val().read);
    });

    //항상 구독을 했으면, 구독해제까지 해줘야 한다.
    return () => notiDB.off();
  }, []);
  return (
    <React.Fragment>
      <Badge
        color="secondary"
        variant="dot"
        invisible={is_read}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </React.Fragment>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;
