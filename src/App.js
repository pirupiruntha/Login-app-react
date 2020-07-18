import React from 'react';
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div className="wrapper">
          <div className="form-wrapper">
              <h1>Login your account</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                  <div className="email">
                      <label htmlFor="email"> Email</label>
                      <input
                          type="text"
                          className=""
                          placeholder="Email"
                          name="email"
                          formNoValidate
                          onChange={this.handleChange}
                      />
                  </div>
                  <div className="password">
                  <label htmlFor="password"> Password</label>
                  <input
                      type="text"
                      className=""
                      placeholder="Password"
                      name="password"
                      formNoValidate
                      onChange={this.handleChange}
                  />
                  </div>
              </form>
          </div>
        </div>
    );
  }
}

export default App;
