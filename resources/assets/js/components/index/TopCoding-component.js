import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Buttonコンポーネント
import Button from '../common/Button-component'

//Stateless Functions
const TopCoding = props =>{
    return(
        <div className="top_coding">
            {props.data.map((item) => {
                return (
                    <div key={ item.coding.id } className="top_introduction">
                        <h2>広島フロントエンド勉強会 Vol.{ item.coding.id }</h2>
                        <h3>『{ item.coding.title }』</h3>
                        <p className="datetime">
                            { item.coding.date.yaer }年
                            { item.coding.date.month }月
                            { item.coding.date.day }日 
                            { item.coding.date.starttime } 〜 { item.coding.date.endtime }
                            <br/>
                            開場：{item.coding.date.open}
                        </p>
                        <p className="placce">
                            { item.coding.place.name } { item.coding.place.floor } { item.coding.place.roome }
                            <br />
                            ({ item.coding.place.address })
                        </p>
                        <Button btnUrl = { item.coding.regist.url + item.coding.regist.id } endTime = {String(item.coding.date.yaer) +
                         "-" + props.getdoubleDigestNumer(String(item.coding.date.month))+ "-" + props.getdoubleDigestNumer(String(item.coding.date.day))+ " " + String(item.coding.date.endtime) } />
                        <a className="btn_more" href="#coding">詳しい情報を見る</a>
                    </div>
                )
            })}
        </div>
    )
}

export default TopCoding
