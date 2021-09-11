import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // editMode  наше значение
  // setEditMode  функция которая изменяет значение

  let [editMode, setEditMode] = useState(false); // false стартовое значение
  let [status, setStatus] = useState(props.status);

  // useEffect // когда произойдет отрисовка jsx разметки
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "-----------"}
          </span>
        </div>
      )}
      {!editMode && false && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
