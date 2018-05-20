import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {auth} from '../../base'

class Login extends Component {
  constructor(props) {
    super(props)

    this.email = null
    this.password = null

    this.state = {
      isLoggedIn: false,
      error: false,
      isLogging: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({
      isLogging: true
    })

    auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(user => {
        this.setState({
          isLoggedIn: true
        })
      })
      .catch((error) => {
        this.setState({
          error: true,
          msg: error,
          isLogging: false
        })
      })
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/admin'/>
    }
    return (
      <div className='container'>
        <div className='bg-faded m-5 p-5 text-center rounded'>
          <h1>Acesso restrito</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='email'>E-mail de Acesso</label>
              <input type='email' className='form-control' placeholder='Insira o E-mail aqui' ref={ref => {
                this.email = ref
              }}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Senha de Acesso</label>
              <input type='password' className='form-control' placeholder='Insira a Senha aqui' ref={ref => {
                this.password = ref
              }}/>
            </div>
            <button type='button' className='btn btn-primary' onClick={this.handleLogin}
                    disabled={this.state.isLogging}>
              Entrar
            </button>
          </form>
          {this.state.error && <p>E-mail e/ou Senha inválido(s)!</p>}
          {this.isLoggedIn && <Redirect to='/admin'/>}
        </div>
      </div>
    )
  }
}

export default Login

