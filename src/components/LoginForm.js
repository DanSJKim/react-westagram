import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked : false,
      loggedIn: false,
      id: '',
      password: ''
    };

    this.loginHandle = () => {
      this.setState({loggedIn:true})
    }
  }

  
  onSubmit = () => {
    console.log('submit');
    const data = { email: this.state.id,
                   password: this.state.password };
                   console.log('data:', data);

    fetch('http://10.58.1.244:8000/user/login', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then((response) =>
    response.json()
    )
    .then((response) => {
      console.log('Success:', response.token);
      if (response.token) {
        this.props.history.push('/main');
      }else {
        alert('아이디 혹은 비밀번호가 틀렸습니다.');
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  

    render() {
      console.log('id: ', this.state.id);
      console.log('password: ', this.state.password)
      
      // 예시
      // let warning;
      // if (this.state.id.length<5) {
      //   warning=<p>아이디가 짧습니다.</p>;
      // }
      
      // {this.state.data.lenght > 0 ? (
      //   this.state.data.map(el => <Profile img={el.src} name={el.name}/>)
      // ) : (
      //   <p>조회 결과가 없습니다.</p>
      // )};


        return(
            <form onSubmit={this.onSubmit} action="">
              <div className="input-group">
                <div>
                  <input onChange={this.onChange} name='id' className="text-input box-border" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" /> 
                </div>
                <div>
                  <input onChange={this.onChange} name='password' className="password-text-input box-border" type="password" placeholder="비밀번호" />
                </div>
              </div>
              <div>
                  <button className="btn-login" type="submit" onClick = {(event) => {
                    event.preventDefault();
                    this.onSubmit();
                    // 메인 페이지로 전환
                    //this.props.history.push('/main');
                  }}>
                    <span>로그인</span>
                  </button>

                {/* <button className="btn-login" type="submit" onClick={(event)=> {
                  event.preventDefault();
                  this.setState({clicked: !this.state.clicked})
                  console.log('111');
                }
                }>
                  {this.state.clicked ? 'clicked' : 'false!'}
                </button> */}
              </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);