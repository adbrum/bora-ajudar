import React, {Component} from 'react'

import base from '../../base'
import {Redirect} from 'react-router-dom'

class AdminEditCampaign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaign: {},
            isLoading: true,
            saved: false
        }

        this.renderCampaign = this.renderCampaign.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        base.fetch(`campaigns/${id}`, {
            context: this,
            asArray: false
        })
            .then(data => {
                console.log(data)
                this.setState({
                    campaign: data,
                    isLoading: false,
                    type: data.type
                })
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

        const id = this.props.match.params.id
        base.update(`campaigns/${id}`, {
            data: {
                name: name,
                description: description,
                goal: goal,
                how: how,
                slogan: slogan,
                type: type,
                current: 0,
            },
            then: err => {
                if (!err) {
                    this.setState({saved: true})
                }
            }
        })
    }

    render() {
        if (this.state.isLoading) {
            return <p>Carregando...</p>
        }
        if (this.state.saved) {
            return <Redirect to='/admin/campaigns'/>
        }
        return (
            <div className='container col-lg-12'>
                <h2 className='text-center'>Editar Campanha</h2>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={() => false}>
                            <div className='form-row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Nome</label>
                                        <input type='text' className='form-control' id='name'
                                               placeholder='Nome da campanha'
                                               ref={ref => {
                                                   this.name = ref
                                               }}
                                               defaultValue={this.state.campaign.name}/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='slogan'>Slogan</label>
                                        <input type='text' className='form-control' id='slogan'
                                               placeholder='Uma frase dedicada a campanha'
                                               ref={ref => {
                                                   this.slogan = ref
                                               }}
                                               defaultValue={this.state.campaign.slogan}/>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='description'>Descrição</label>
                                <textarea className='form-control' id='description'
                                          placeholder='Fale sobre esta campanha'
                                          ref={ref => {
                                              this.description = ref
                                          }}
                                          defaultValue={this.state.campaign.description}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Tipo da campanha</label><br/>
                                <input type='radio' className='custom-radiol' name='type'
                                       defaultChecked={this.state.campaign.type === 'money'}
                                       onClick={() => this.setState({type: 'money'})}
                                /> Doação em dinheiro <br/>
                                <input type='radio' className='custom-radiol' name='type'
                                       defaultChecked={this.state.campaign.type === 'items'}
                                       onClick={() => this.setState({type: 'items'})}
                                /> Produtos <br/>
                            </div>

                            {
                                this.state.type === 'money' &&
                                <div className='form-group'>
                                    <label>Meta</label>
                                    <input type='number' placeholder='0,00' className='form-control'
                                           ref={ref => {
                                               this.goal = ref
                                           }}
                                           defaultValue={this.state.campaign.goal}/>
                                    {/*Doado:<input type="text" ref={ref => this.current = ref} defaultValue={0}/>*/}
                                </div>
                            }

                            {
                                this.state.type === 'items' &&
                                <div className='form-group'>
                                    <label>Como doar</label>
                                    <input type='text' className='form-control'
                                           ref={ref => {
                                               this.how = ref
                                           }}
                                           defaultValue={this.state.campaign.how}
                                    />
                                </div>
                            }

                            <button type='button' className='btn btn-primary btn-block'
                                    onClick={() => this.handleSave()}>
                                Salvar edição
                            </button>
                        </form>
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

export default AdminEditCampaign