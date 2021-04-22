import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  sendNewMessageActionCreator,
} from "../../data/reducerMessages";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: (newMessageBody) => {
      let action = sendNewMessageActionCreator(newMessageBody);
      dispatch(action);
    },
  };
};

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
