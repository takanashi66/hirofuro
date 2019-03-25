import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <a className="btn_entry btn_none" href={ this.props.btnUrl } target="_blank">参加登録はこちら</a>
        )
    }
}

export default Button
