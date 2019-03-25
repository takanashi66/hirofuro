import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import moment from 'moment'

class Button extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            BtnText: "参加登録はこちら",
            BtnClassName: ""
        }
    }
    
    componentWillMount(){
        
        //終了時間のカウンター
        const startInterval = setInterval(() =>{
            moment.locale('ja')
            if(! moment().isBefore(this.props.endTime)){
                clearInterval(startInterval)
                this.setState({BtnText: "終了しました" })
                this.setState({BtnClassName: "btn_none" })
            }
        }, 1000)
        
        
        
    }

    render(){
        return(
            <a className={ `btn_entry ${ this.state.BtnClassName } `} href={ this.props.btnUrl } target="_blank">{ this.state.BtnText }</a>
        )
    }
}

export default Button
