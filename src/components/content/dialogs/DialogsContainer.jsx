import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { sendNewMessageActionCreator, upNewMessageTextActionCreator } from "../../data/reducerMessages";
let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => { 
  return {
    onMessageChange: (text) => {
      let action = upNewMessageTextActionCreator(text);
      dispatch(action);
    },
    sendNewMessage: () => {
      let action = sendNewMessageActionCreator();
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
