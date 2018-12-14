import React, { Component } from "react";

class Login extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  uname: '',
                  psw: ''
            };
      }
      handelUname=(event)=>{
            this.setState({
                  uname:event.target.value
            })
      }
      handelPsw=(event)=>{
            this.setState({
                  psw:event.target.value
            })
      }
      handleOnclick = () =>{
            console.log(this.state.psw,this.state.uname)
      }
      render() {
            return (
                  <div>
                        <button onClick={this.handleOnclick}>提交</button>
                        <div>
                              用户名: <input value={this.state.uname} onChange={this.handelUname} name="uname" type="text" />
                              <br />
                              密码: <input value={this.state.psw} onChange={this.handelPsw} name="psw" type="password" />
                        </div>
                  </div>
            );
      }
}

export default Login;
