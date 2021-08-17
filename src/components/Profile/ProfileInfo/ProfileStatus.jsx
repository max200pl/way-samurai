import React from "react";

class ProfileStatus extends React.Component {
  // в памяти хранится объект у него есть свой локальный Sate в отличии от функциональной компоненты

  state = {
    // localState
    editMode: false,
    status: this.props.status, //тот статус который пришел с STATE
  };

  activateEditMode = () => {
    this.setState({
      // setState является асинхронным
      // setState метод который берется с React.Component
      editMode: true, // editMode режим редактирования
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

  componentDidUpdate(prevProps, prevState) {
    // метод жизненного цикла при изменении local state вызывается componentDidUpdate
    // можно отследить предыдущие значения state с текущими через prevProps, prevState
    if (prevProps.status !== this.props.status) {
      // если предыдущее значение с props изменилось тогда перезаписываем новый статус
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----------"}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
