import React, {Component} from 'react'

import base from './base'

// import NewCampaign from './NewCampaign'

class AdminCampaigns extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: {}
        }

        this.removeCampaign = this.removeCampaign.bind(this)
        this.renderCampaign = this.renderCampaign.bind(this)
        this.handleSave = this.handleSave.bind(this)
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

    handleSave() {
        console.log('TIPO: ', this.state.type)
        const name = this.name.value
        const description = this.description.value
        const slogan = this.slogan.value
        const type = this.state.type
        const how = this.state.type === 'items' ? this.how.value : null
        const goal = this.state.type === 'money' ? this.goal.value : null
        const current = this.state.type === 'money' ? this.current.value : null

        base.push('campaigns', {
            data: {
                name: name,
                description: description,
                goal: goal,
                how: how,
                slogan: slogan,
                type: type,
                current: current,
            },
            then: err => {
                if (!err) {
                    this.name.value = ''
                    this.description.value = ''
                    this.slogan.value = ''
                    this.setState({type: ''})
                    if(this.goal){
                        this.goal.value = ''
                    }
                    if(this.current){
                        this.current.value = ''
                    }
                    if(this.how){
                        this.how.value = ''
                    }


                }
            }
        })
    }

    render() {
        return (
            <div className='container col-lg-12'>
                <h2 className='text-center'>Campanhas</h2>
                <div className='card'>
                    <div className='card-body'>
                        Campanha: <input type="text" className='form form-control' ref={ref => this.name = ref}/><br/>
                        Sub-título: <input type="text" className='form form-control'
                                           ref={ref => this.slogan = ref}/><br/>
                        Descrição: <textarea className='form form-control' ref={ref => this.description = ref}/><br/>
                        Tipo: <br/>
                        <input type="radio" name='type' onClick={() => this.setState({type: 'money'})}/> Doação <br/>
                        <input type="radio" name='type' onClick={() => this.setState({type: 'items'})}/> Produtos <br/>
                        {this.state.type === 'money' && <div>
                            <h4>Doação</h4>
                            Meta:<input type="text" ref={ref => this.goal = ref}/>
                            Doado:<input type="text" ref={ref => this.current = ref} defaultValue={0}/>
                        </div>}
                        {this.state.type === 'items' && <div>
                            <h4>Produtos</h4>
                            <input type="text" ref={ref => this.how = ref}/>
                        </div>}
                        <button className='tn btn-success btn-sm mr-1' onClick={this.handleSave}>Salvar</button>
                        <div className='row'>
                            <ul>
                                {
                                    Object
                                        .keys(this.state.campaigns)
                                        .map(key => this.renderCampaign(key, this.state.campaigns[key]))
                                }
                            </ul>
                        </div>
                        {/*<NewCampaign />*/}
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
                        <button className='btn btn-primary btn-sm mr-1'>Editar</button>
                        <button className='btn btn-danger btn-sm ml-1'
                                onClick={() => this.removeCampaign(key)}>Remover
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default AdminCampaigns