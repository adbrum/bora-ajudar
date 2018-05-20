import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'

import {auth} from '../../base'
// import AdminHome from './AdminHome'
import AdminCampaigns from '../Campanigns/AdminCampaigns'
import AdminEditCampaign from "../Campanigns/AdminEditCampaign";

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log('auth', user)
      this.setState({
        isAuthing: false,
        isLoggedIn: !!user,
        user: user
      })
    })
  }

  render() {
    if (this.state.isAuthing) {
      return <p>Verificando...</p>
    }
    if (!this.state.isLoggedIn) {
      return <Redirect to='/login'/>
    }
    return (
      <div className='container'>
        <div className='bg-faded m-5 p-5 rounded'>
          <h1 className='text-center'>Painel Administrativo</h1>
          <div className='row my-4'>
            <div className='col-3'>
              <ul className='list-group'>
                <Link to='/admin'>
                  <li className='list-group-item'>Overview</li>
                </Link>
                <Link to='/admin/campaigns'>
                  <li className='list-group-item'>Campanhas</li>
                </Link>
                <Link to='/'>
                  <li className='list-group-item'>Sair</li>
                </Link>
              </ul>
            </div>
            <div className='col-8'>
              <Switch>
                <Route exact path='/' component={Admin}/>
                <Route path={`${this.props.match.url}/campaigns/:id`} component={AdminEditCampaign}/>
                <Route path={`${this.props.match.url}/campaigns`} component={AdminCampaigns}/>
              </Switch>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Admin