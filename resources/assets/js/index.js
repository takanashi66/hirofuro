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

    //JSONデータの改行を変換
    nl2br(text){
        const regex = /(\n)/g
        return text.split(regex).map((line, i) =>{
            if(line.match(regex)) {
                return <br key={i} />
            }else{
                return line;
            }
        });
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
                    <CodingSection  data={ this.state.data } nl2br={this.nl2br} />
                    <DesignSection  data={ this.state.data } nl2br={this.nl2br}  />
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
