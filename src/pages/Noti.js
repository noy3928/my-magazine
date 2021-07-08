import React from "react";
import { Grid, Text, Image } from "../elements";
import Card from "../components/Card";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const Notification = (props) => {
  let noti = [
    { user_name: "mean0", post_id: "post1" },
    { user_name: "mean0", post_id: "post2" },
    { user_name: "mean0", post_id: "post3" },
    { user_name: "mean0", post_id: "post4" },
  ];

  return (
    <React.Fragment>
      <Grid
        padding="16px"
        borderRadius="20px"
        flex
        flexDirection="column"
        alignItems="center"
      >
        {noti.map((n) => {
          return <Card {...n} key={n.post_id} />;
        })}
      </Grid>
    </React.Fragment>
  );
  // const Notification = (props) => {
  //   const user = useSelector((state) => state.user.user);
  //   const [noti, setNoti] = React.useState([]);

  //   React.useEffect(() => {
  //     if (!user) {
  //       return;
  //     }

  //     const notiDB = realtime.ref(`noti/${user.uid}/list`);

  //     const _noti = notiDB.orderByChild("insert_dt");

  //     _noti.once("value", (snapshot) => {
  //       if (snapshot.exists()) {
  //         let _data = snapshot.val();

  //         console.log(_data);

  //         let _noti_list = Object.keys(_data)
  //           .reverse()
  //           .map((s) => {
  //             return _data[s];
  //           });

  //         console.log(_noti_list);
  //         setNoti(_noti_list);
  //       }
  //     });
  //   }, [user]);

  //   return (
  //     <React.Fragment>
  //       <Grid padding="16px" bg="">
  //         {noti.map((n, idx) => {
  //           return <Card key={`noti_${idx}`} {...n}></Card>;
  //         })}
  //       </Grid>
  //     </React.Fragment>
  //   );
  // };
};

export default Notification;
