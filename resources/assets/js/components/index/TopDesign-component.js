import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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
                        <a className="btn_entry" href={ item.design.regist.url + item.design.regist.id } target="_blank">参加登録はこちら</a><a className="btn_more" href="#design">詳しい情報を見る</a>
                    </div>
                )
            })}
        </div>
    )
}

export default TopDesign
