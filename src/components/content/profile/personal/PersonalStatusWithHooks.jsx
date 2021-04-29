import React, { useEffect, useState } from "react";

const PersonalStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div>
      {!editMode && (
        <p onDoubleClick={activateEditMode}>{props.status || "No status"}</p>
      )}

      {editMode && (
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
          autoFocus
        />
      )}
    </div>
  );
};

export default PersonalStatusWithHooks;
