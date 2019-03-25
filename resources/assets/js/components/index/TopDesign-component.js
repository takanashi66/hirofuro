import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Buttonコンポーネント
import Button from '../common/Button-component'

//Stateless Functions
const TopDesign = props =>{
    return(
        <div className="top_design">
            {props.data.map((item) => {
                return (
                    <div key={ item.design.id } className="top_introduction">
                        <h2>広島フロントエンド勉強会 〜デザイン部〜 Vol.{ item.design.id }</h2>
                        <h3>『{ item.design.title }』</h3>
                        <p className="datetime">
                            { item.design.date.yaer }年
                            { item.design.date.month }月
                            { item.design.date.day }日 
                            { item.design.date.starttime } 〜 { item.design.date.endtime }
                        </p>
                        <p className="placce">
                            { item.design.place.name } { item.design.place.floor } { item.design.place.roome }
                            <br />
                            ({ item.design.place.address })
                        </p>
                        <Button btnUrl = { item.design.regist.url + item.design.regist.id } endTime = {String(item.design.date.yaer) +
                         "-" + props.getdoubleDigestNumer(String(item.design.date.month))+ "-" + props.getdoubleDigestNumer(String(item.design.date.day))+ " " + String(item.design.date.endtime) } />
                        <a className="btn_more" href="#design">詳しい情報を見る</a>
                    </div>
                )
            })}
        </div>
    )
}

export default TopDesign
