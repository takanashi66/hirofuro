//IE11用に追加
import "@babel/polyfill";
//@babel/polyfillにはfetchが含まれてないので追加
import 'whatwg-fetch'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//コンポーネント呼び出し
import FirstView from './components/index/FirstView-component'
import CodingSection from './components/index/CodingSection-component'
import DesignSection from './components/index/DesignSection-component'
import AboutSection from './components/index/AboutSection-component'
import Footer from './components/index/Footer-component'

const json_url = 'common/js/config.json';

//メインコンポーネント
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        fetch(json_url)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                data: responseData
            })
        })
    }

    render(){
        return(
            <div className="index">
                <FirstView  data = { this.state.data } />
                <main className="main" id="main">
                    <CodingSection  data = { this.state.data } />
                    <DesignSection  data = { this.state.data } />
                    <AboutSection />
                </main>
                <Footer />
            </div>
        )
    }
}

//レンダリング
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
