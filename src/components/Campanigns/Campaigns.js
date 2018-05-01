import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
// import axios from 'axios'

import base from '../../base'

class Campaigns extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: {},
            redirectDonate: '',
            value: ''
        }
    }

    componentDidMount() {
        base.syncState('campaigns', {
            context: this,
            state: 'campaigns',
            asArray: false
        })
    }

    handleDonate(key) {

        this.setState({
            redirectDonate: true,
            value: this.value.value
        })
    }

    /*Função para pedidos em um servidor externo*/

    /*handleDonate(key) {
        axios
            .post('/api/donate', {
                campaign: key,
                valor: 3
            })
            .then(data => {
                windows.location.data.data.url
                console.log(data.data.url)
            })
    }*/

    renderCampaign(key, campaign) {
        const porcent = (parseFloat(campaign.current) / parseFloat(campaign.goal)) * 100
        return (
            <section key={key} className='page-section'>
                <div className='container'>
                    <div className='product-item bg-faded'>
                        <div className='product-item-title d-flex'>
                            <div className='p-5 d-flex mr-auto rounded'>
                                <h2 className='section-heading mb-0'>
                                    <span className='section-heading-upper'>{campaign.slogan}</span>
                                    <span className='section-heading-lower'>{campaign.name}</span>
                                </h2>
                            </div>
                        </div>
                        <div className='product-item-description d-flex'>
                            <div className='p-5 rounded'>
                                <p className='mb-0'>{campaign.description}</p>

                                {
                                    campaign.type === 'money' &&
                                    <div>
                                        <div className='progress'>
                                            <div style={{width: parseInt((porcent), 0) + '%'}} className='progress-bar'
                                                 role='progressbar' aria-valuenow='50' aria-valuemin='0'
                                                 aria-valuemax='100'/>
                                        </div>
                                        <p>Meta: €{parseFloat(campaign.goal).toFixed(2)} | Atingidos:
                                            €{parseFloat(campaign.current).toFixed(2)}</p>
                                        <select className='form form-control' ref={ref => this.value = ref}>
                                            <option value="2.00">€2,00</option>
                                            <option value="5.00">€5,00</option>
                                            <option value="10.00">€10,00</option>
                                            <option value="50.00">€50,00</option>
                                        </select>
                                        <br/>
                                        <div>
                                            <button className='btn btn-success'
                                                    onClick={() => this.handleDonate(key)}>Contribuir
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    campaign.type === 'items' &&
                                    <div>
                                        <h4>Como doar</h4>
                                        <p>{campaign.how}</p>
                                        <div>
                                            <button className='btn btn-success'
                                                    onClick={() => this.handleDonate(key)}>Doar
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render() {
        if (this.state.redirectDonate !== '') {
            return <Redirect to={'/donate'} value={this.state.value}/>
        }
        /*if (this.state.redirectDonate !== '') {
            return <Redirect to={'/donate'}/>
        }*/
        return (
            <div>
                <section className='page-section'>
                    <div className='container'>
                        <div className='product-item'>
                            <div className='product-item-title d-flex'>
                                <div className='bg-faded p-5 d-flex ml-auto rounded'>
                                    <h2 className='section-heading mb-0'>
                                        <span className='section-heading-upper'>Ajude-nos por nossas</span>
                                        <span className='section-heading-lower'>Campanhas</span>
                                    </h2>
                                </div>
                            </div>
                            <img className='product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0'
                                 src='img/products-01-menor.jpg' alt=''/>
                            <div className='product-item-description d-flex mr-auto'>
                                <div className='bg-faded p-5 rounded'>
                                    <p className='mb-0'>We take pride in our work, and it shows. Every time you order a
                                        beverage from us, we guarantee that it will be an experience worth having.
                                        Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal
                                        tea, or something as simple as a cup of speciality sourced black coffee, you
                                        will be coming back for more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    Object
                        .keys(this.state.campaigns)
                        .map(key => this.renderCampaign(key, this.state.campaigns[key]))
                }
            </div>
        )
    }
}

export default Campaigns