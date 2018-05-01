import React, {Component} from 'react'

import base from '../../base'

class NewCampaign extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: {}
        }

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

    handleSave() {
        console.log('TIPO: ', this.state.type)
        const name = this.name.value
        const description = this.description.value
        const slogan = this.slogan.value
        const type = this.state.type
        const how = this.state.type === 'items' ? this.how.value : null
        const goal = this.state.type === 'money' ? this.goal.value : null
        // const current = this.state.type === 'money' ? this.current.value : null

        base.push('campaigns', {
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
                    this.name.value = ''
                    this.description.value = ''
                    this.slogan.value = ''
                    this.setState({type: ''})
                    if (this.goal) {
                        this.goal.value = ''
                    }
                    if(this.current){
                        this.current.value = ''
                    }
                    if (this.how) {
                        this.how.value = ''
                    }


                }
            }
        })
    }

    render() {
        return (
            <div className='my-5'>
                <h3>Nova campanha</h3>
                <form onSubmit={() => false}>
                    <div className='form-row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='name'>Nome</label>
                                <input type='text' className='form-control' id='name' placeholder='Nome da campanha'
                                       ref={ref => {
                                           this.name = ref
                                       }}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label htmlFor='slogan'>Slogan</label>
                                <input type='text' className='form-control' id='slogan'
                                       placeholder='Uma frase dedicada a campanha' ref={ref => {
                                    this.slogan = ref
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='description'>Descrição</label>
                        <textarea className='form-control' id='description' placeholder='Fale sobre esta campanha'
                                  ref={ref => {
                                      this.description = ref
                                  }}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Tipo da campanha</label><br/>
                        <input type='radio' className='custom-radiol' name='type'
                               onClick={() => this.setState({type: 'money'})}
                        /> Doação em dinheiro <br/>
                        <input type='radio' className='custom-radiol' name='type'
                               onClick={() => this.setState({type: 'items'})}
                        /> Produtos <br/>
                    </div>

                    {
                        this.state.type === 'money' &&
                        <div className='form-group'>
                            <label>Meta</label>
                            <input type='number' placeholder='0,00' className='form-control' ref={ref => {
                                this.goal = ref
                            }}/>
                            {/*Doado:<input type="text" ref={ref => this.current = ref} defaultValue={0}/>*/}
                        </div>
                    }

                    {
                        this.state.type === 'items' &&
                        <div className='form-group'>
                            <label>Como doar</label>
                            <input type='text' className='form-control' ref={ref => {
                                this.how = ref
                            }}/>
                        </div>
                    }

                    <button type='button' className='btn btn-primary btn-block' onClick={() => this.handleSave()}>
                        Iniciar nova campanha
                    </button>
                </form>
            </div>
        )
    }
}

export default NewCampaign