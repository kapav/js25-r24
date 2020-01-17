import React from 'react';

import './index.css';

class Staircase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      role: '',
      loginValid: false,
      passwordValid: false,
      roleValid: false,
      roles: ['', 'Гость', 'Модератор', 'Администратор']
    }
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validatorRequired(field) {
    return !!field;
  }

  validatorMinLength(min, field) {
    return field.length >= min;
  }

  validateLogin(login) {
    return this.validatorRequired(login);
  }

  validatePassword(password) {
    return this.validatorRequired(password) && this.validatorMinLength(7, password);
  }

  validateRole(role) {
    return this.validatorRequired(role);
  }

  onLoginChange(e) {
    const value = e.target.value;
    const valid = this.validateLogin(value);
    this.setState({login: value, loginValid: valid});
  }

  onPasswordChange(e) {
    const value = e.target.value;
    const valid = this.validatePassword(value);
    this.setState({password: value, passwordValid: valid});
  }

  onRoleChange(e) {
    const value = e.target.value;
    const valid = this.validateRole(value);
    this.setState({role: value, roleValid: valid});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.loginValid && this.state.passwordValid && this.state.roleValid) {
      console.log('Отправлено. Форма с управляемым компонентом.');
      console.log({
        login: this.state.login,
        password: this.state.password,
        role: this.state.role
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>staircase works!</p>
        <h3>Форма с управляемым компонентом</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="loginTo">Имя:</label>
            <input type="text" id="loginTo"
              value={this.state.login}
              onChange={this.onLoginChange} />
            {!this.state.loginValid &&
              <div className="error-text">
                Обязательное поле имени
              </div>
            }
          </div>
          <div>
            <label htmlFor="passwordTo">Пароль:</label>
            <input type="password" id="passwordTo"
              value={this.state.password}
              onChange={this.onPasswordChange} />
            {!this.state.passwordValid &&
              <div className="error-text">
                Пароль не введён или его длина меньше 7 символов
              </div>
            }
          </div>
          <div>
            <label htmlFor="roleTo">Роль:</label>
            <select id="roleTo"
              value={this.state.role}
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

export default Staircase;
