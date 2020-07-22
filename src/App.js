import React from 'react';
import './App.css';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

class App extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
        if (!this.state.password){
            passwordError=" password cannot be blank";
        }
        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }
        else
            return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };

  render(){
    return (
        <div className="wrapper">
            <img src="../web.jpg" alt="lap with user"/>
          <div className="form-wrapper">

              <h1>Login your account</h1>
              <form onSubmit={this.handleSubmit} >
                  <div className="email">
                      <label htmlFor="email"> Email</label>
                      <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                      />
                  </div>
                  <div className="emailerror">
                      {this.state.emailError}
                  </div>
                  <div className="password">
                  <label htmlFor="password"> Password</label>
                  <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                  />
                  </div>
                  <div className="passworderror">
                      {this.state.passwordError}
                  </div>
                  <div className="login">
                      <button type="submit"> Log In</button>
                  </div>
              </form>
          </div>
        </div>
    );
  }
}

export default App;
