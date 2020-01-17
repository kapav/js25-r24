import React from 'react';

import './index.css';

class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: false,
      ageValid: false,
      roleValid: false,
      roles: ['', 'Гость', 'Модератор', 'Администратор']
    }
    this.nameOe = React.createRef();
    this.ageOe = React.createRef();
    this.roleOe = React.createRef();
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validatorRequired(field) {
    return !!field;
  }

  validateName(login) {
    return this.validatorRequired(login);
  }

  validateAge(age) {
    return this.validatorRequired(age);
  }

  validateRole(role) {
    return this.validatorRequired(role);
  }

  onNameChange() {
    const value = this.nameOe.current.value;
    const valid = this.validateName(value);
    this.setState({nameValid: valid});
  }

  onAgeChange() {
    const value = this.ageOe.current.value;
    const valid = this.validateAge(value);
    this.setState({ageValid: valid});
  }

  onRoleChange() {
    const value = this.roleOe.current.value;
    const valid = this.validateRole(value);
    this.setState({roleValid: valid});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.nameValid && this.state.ageValid && this.state.roleValid) {
      console.log('Отправлено. Форма с неуправляемым компонентом.');
      console.log({
        name: this.nameOe.current.value,
        age: this.ageOe.current.value,
        role: this.roleOe.current.value
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>pitch works!</p>
        <h3>Форма с неуправляемым компонентом</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nameOe">Имя</label>
            <input type="text" id='nameOe'
              ref={this.nameOe}
              onChange={this.onNameChange} />
            {!this.state.nameValid &&
              <div className="error-text">
                Обязательное поле имени
              </div>
            }
          </div>
          <div>
            <label htmlFor="ageOe">Возраст</label>
            <input type="number" id="ageOe"
              ref={this.ageOe}
              onChange={this.onAgeChange} />
            {!this.state.ageValid &&
              <div className="error-text">
                Обязательное поле возраста
              </div>
            }
          </div>
          <div>
            <label htmlFor="roleOe">Роль</label>
            <select id="roleOe"
              ref={this.roleOe}
              onChange={this.onRoleChange}>
              {this.state.roles.map((r, index) =>
                <option key={index} value={r}>
                  {r}
                </option>
              )}
            </select>
            {!this.state.roleValid &&
              <div className="error-text">
                Обязательное поле роли
              </div>
            }
          </div>
          <button type="submit">Отправить</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Pitch;
