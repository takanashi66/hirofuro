import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Stateless Functions
const CodingSection = props =>{
    return(
        <article id="coding">
            {props.data.map((item) => {
                return (
                    <section key={ item.coding.id } className="introduction">
                        <h2>広島フロントエンド勉強会 Vol.{ item.coding.id }</h2>
                        <h3>『{ item.coding.title }』</h3>
                        <p className="text">
                            { props.nl2br(item.coding.description) }
                        </p>
                        <table className="info_table">
                            <tbody>
                                <tr>
                                    <th>日時</th>
                                    <td>
                                        { item.coding.date.yaer }年{ item.coding.date.month }月{ item.coding.date.day }日 { item.coding.date.starttime } 〜 { item.coding.date.endtime }
                                    </td>
                                </tr>
                                <tr>
                                    <th>会場</th>
                                    <td>
                                        { item.coding.place.name } { item.coding.place.floor } { item.coding.place.roome }
                                        <br />
                                        ({ item.coding.place.address })
                                    </td>
                                </tr>
                                {/* 講師の登録がある場合は表示 */}
                                {(() => {
                                    if(item.coding.lecturer.name.length){
                                        return(
                                            <tr>
                                                <th>講師</th>
                                                <td>
                                                    <a href={ item.coding.lecturer.url } target="_blank">
                                                        <strong>{ item.coding.lecturer.name }</strong> ({ item.coding.lecturer.belong })
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })()}
                                <tr>
                                    <th>定員</th>
                                    <td>{ item.coding.capacity }人</td>
                                </tr>
                                <tr>
                                    <th>参加費</th>
                                    <td>{ item.coding.fee }円</td>
                                </tr>
                            </tbody>
                        </table>

                        <a className="btn_entry btn_none" href={ item.coding.regist.url + item.coding.regist.id } target="_blank">参加登録はこちら</a>
                    </section>
                )
            })}
        </article>
    )
}

export default CodingSection
