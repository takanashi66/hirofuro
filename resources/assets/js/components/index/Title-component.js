import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Titleコンポーネント
class Title extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <h1>
                {/* 親からpropsで受け取ったstate.data */}
                {this.props.data.map((item) => {
                    return (
                        //親からpropsで受け取ったstate.data
                        <span key={item.coding.id}>{item.coding.title}</span>
                    )
                })}
            </h1>
        )
    }
}

export default Title
