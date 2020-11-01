import React, { Component } from "react";

export default class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taikhoan: "",
      matkhau: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>Auth Page</h3>
            <form onSubmit={this.handleLogin}>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taikhoan"
                  onChange={this.handleOnChange}
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matkhau"
                  onChange={this.handleOnChange}
                />
              </div>
              <button className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
