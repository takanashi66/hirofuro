import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//TopCodingコンポーネント
import TopCoding from './TopCoding-component'
//TopDesignコンポーネント
import TopDesign from './TopDesign-component'

//Stateless Functions
const FirstView = props =>{
    return(
        <div className="top sp">
            <h1 className="logo" data-heading="広島フロントエンド勉強会">広島フロントエンド勉強会</h1>
            <TopCoding data = { props.data } />
            <TopDesign data = { props.data } />
        </div>
    )
}

export default FirstView
