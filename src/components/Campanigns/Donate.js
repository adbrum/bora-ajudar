import React, {Component} from 'react'
import { Redirect} from 'react-router-dom'

class Donate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            click: false
        }

        this.clickButtonHandle = this.clickButtonHandle.bind(this)
    }

    clickButtonHandle() {
        this.setState({click: true})
    }

    render() {
        if (this.state.click) {
            return <Redirect to={'/campaigns'}/>
        }
        return (
            <section className='page-section'>
                <div className='container'>
                    <div className='product-item-description d-flex mr-auto'>
                        <div className='bg-faded p-5 rounded'>
                            <p className='mb-0'>Doação realizada com sucesso, obrigado!</p>

                            <button className='btn btn-success'
                                    onClick={this.clickButtonHandle}>Retornar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Donate