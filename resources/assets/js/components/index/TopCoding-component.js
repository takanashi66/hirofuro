import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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
                        </p>
                        <p className="placce">
                            { item.coding.place.name } { item.coding.place.floor } { item.coding.place.roome }
                            <br />
                            ({ item.coding.place.address })
                        </p>
                        <a className="btn_entry btn_none" href={ item.coding.regist.url + item.coding.regist.id } target="_blank">参加登録はこちら</a>
                        <a className="btn_more" href="#coding">詳しい情報を見る</a>
                    </div>
                )
            })}
        </div>
    )
}

export default TopCoding
