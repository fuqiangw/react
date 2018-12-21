import React from 'react';
import axios from 'axios';
import './login.less';

class Login extends React.Component {


    handleClickLogin = () => {
        axios.post("addData", {
            username: this.usernameNode.value,
            psw: this.pswNode.value
          })
          .then( (r)=>{
            // response.data.data;
            console.log(r);
          })
          .catch(function (error) {
              console.log(error);
          })
    };
    handleClicklogout = () => {
        
    };
  

  render() {
    return (
        <div>
            <div className="home-page">
              <div>姓名 <input ref={(node) => {this.usernameNode = node;}} type="text" name="lname" /></div>
              <div>密码 <input type="text"  ref={(node) => {this.pswNode = node;}} name="lname" /></div>
              <p onClick={this.handleClickLogin}>登录</p>

              <p onClick={this.handleClicklogout}>注销</p>
            </div>
        </div>
    );
  }
}

export default Login;
