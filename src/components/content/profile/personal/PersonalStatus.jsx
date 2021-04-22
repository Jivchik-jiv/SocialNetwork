import React from "react";

class PersonalStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState){
      if(prevProps.status !== this.props.status){
    this.setState({
        status: this.props.status
      });}
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <p onDoubleClick={this.activateEditMode}>
            {this.props.status || "No status"}
          </p>
        )}

        {this.state.editMode && (
          <input
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            onChange={this.onStatusChange}
            autoFocus
          />
        )}
      </div>
    );
  }
}

export default PersonalStatus;
