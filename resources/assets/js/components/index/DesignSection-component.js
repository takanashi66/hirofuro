import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Buttonコンポーネント
import Button from '../common/Button-component'

//Stateless Functions
const DesignSection = props =>{
    return(
        <article id="design">
            {props.data.map((item, i) => {
                return (
                    <section key={i} className="introduction">
                        <h2>広島フロントエンド勉強会 Vol.{ item.design.id }</h2>
                        <h3>『{ item.design.title }』</h3>
                        <p className="text">
                            { props.nl2br(item.design.description) }
                        </p>
                        <table className="info_table">
                            <tbody>
                                <tr>
                                    <th>日時</th>
                                    <td>
                                        { item.design.date.yaer }年{ item.design.date.month }月{ item.design.date.day }日 { item.design.date.starttime } 〜 { item.design.date.endtime }
                                    </td>
                                </tr>
                                <tr>
                                    <th>会場</th>
                                    <td>
                                        { item.design.place.name } { item.design.place.floor } { item.design.place.roome }
                                        <br />
                                        ({ item.design.place.address })
                                    </td>
                                </tr>
                                {/* 講師の登録がある場合は表示 */}
                                {(() => {
                                    if(item.design.lecturer.name.length){
                                        return(
                                            <tr>
                                                <th>講師</th>
                                                <td>
                                                    <a href={ item.design.lecturer.url } target="_blank">
                                                        <strong>{ item.design.lecturer.name }</strong> ({ item.design.lecturer.belong })
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })()}
                                <tr>
                                    <th>定員</th>
                                    <td>{ item.design.capacity }人</td>
                                </tr>
                                <tr>
                                    <th>参加費</th>
                                    <td>{ item.design.fee }円</td>
                                </tr>
                            </tbody>
                        </table>

                        <Button btnUrl = { item.design.regist.url + item.design.regist.id } />
                    </section>
                )
            })}
        </article>
    )
}

export default DesignSection
