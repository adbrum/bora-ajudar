import React, {Component} from 'react'

import base from '../../base'
import NewCampaign from "./NewCampaign";
import {Link, Route} from "react-router-dom";
import AdminEditCampaign from "./AdminEditCampaign";

// import NewCampaign from './NewCampaign'

class AdminCampaigns extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: {}
        }

        this.removeCampaign = this.removeCampaign.bind(this)
        this.renderCampaign = this.renderCampaign.bind(this)
    }

    componentDidMount() {
        base
            .syncState('campaigns', {
                context: this,
                state: 'campaigns',
                asArray: false
            })
    }

    removeCampaign(key) {
        base
            .remove(`campaigns/${key}`, err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='container col-lg-12'>
                <h2 className='text-center'>Campanhas</h2>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <ul>
                                {
                                    Object
                                        .keys(this.state.campaigns)
                                        .map(key => this.renderCampaign(key, this.state.campaigns[key]))
                                }
                            </ul>
                        </div>
                        <NewCampaign/>
                    </div>
                </div>
            </div>
        )
    }

    renderCampaign(key, campaign) {
        return (
            <div key={key} className='container col-lg-12'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>{campaign.name}</h5>
                        <p>{campaign.description}</p>
                        <Link to={`/admin/campaigns/${key}`} className='btn btn-primary btn-sm mr-1'>Editar</Link>
                        <button className='btn btn-danger btn-sm ml-1'
                                onClick={() => this.removeCampaign(key)}>Remover
                        </button>
                    </div>
                </div>

                <Route path={`/admin/campaigns/${key}`} className='btn btn-primary btn-sm mr-1'
                       render={(props) => (<AdminEditCampaign {...props} campaign={campaign}/>)}
                />
            </div>
        )
    }
}

export default AdminCampaigns