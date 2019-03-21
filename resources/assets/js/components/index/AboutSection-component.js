import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Stateless Functions
const AboutSection = props =>{
    return(
        <article className="about">
            <section className="about_inner">
                <h2>広島フロントエンド勉強会について</h2>
                <p>広島フロントエンド勉強会は広島で活動するフロントエンドエンジニアの悩みを解決する集まりです。<br />毎月テーマに沿って、フロントエンドの疑問や悩みを解決しましょう。<br />共に疑問や悩みの解決、新たな技術の習得を通して広島のweb制作のレベルアップを目指します。</p>
                <h2>デザイン部について</h2>
                <p>広島でwebデザインを主軸にした勉強会が少なく、情報共有できるコミュニティーも少ないとの相談を受け、<br />広島フロントエンド勉強会の姉妹勉強会として「広島フロントエンド勉強会〜デザイン部〜」を立ち上げました。<br />ツールの使い方から文字サイズや行間はどうやって決めるかなど素朴な疑問まで、<br />参加者全員で情報を共有し、広島のwebデザインのレベルアップを目指します！</p>
                <h2>活動について</h2>
                <p>毎月の勉強会とは別に、Facebookグループで情報交換や交流を行なっています。</p><br /><a className="btn_face" href="https://www.facebook.com/groups/291848747857968/" target="_blank">フロントエンドグループ</a><a className="btn_face" href="https://www.facebook.com/groups/250737515387161/" target="_blank">デザイングループ</a>
                <p> </p>
                <h2>開催情報</h2>
                <p>開催情報はwebページとFacebookページ、Facebookグループ、Twitterを通じて発信しています。</p><br /><a className="btn_face" href="https://www.facebook.com/hirofuro.org/" target="_blank">Facebookページ</a><a className="btn_face" href="https://twitter.com/hirofuroorg" target="_blank">Twitter(@hirofuroorg)</a><br />
                <p><small>※広島フロントエンド勉強会はボランティアベースで開催しており、<br />知識のシェア・助け合いで成り立ってますので、ご参加の際はご理解・ご協力お願いいたします。<br />ご理解いただけない場合は、参加をお断りすることがございます。</small></p>
            </section>
            <section className="member">
                <div className="member_item"><img src="../common/img/inoue.jpg" alt="井上拓" />
                    <h2>井上 拓</h2>
                    <ul>
                        <li><a href="https://funaffect.jp" target="_blank">ファナフェクト株式会社</a></li>
                        <li>フロントエンドエンジニア</li>
                    </ul>
                </div>
                <div className="member_item"><img src="../common/img/sakakibara.jpg" alt="榊原 裕希" />
                    <h2>榊原 裕希</h2>
                    <ul>
                        <li><a href="https://leadspace.co.jp/" target="_blank">リードスペース株式会社</a></li>
                        <li>フロントエンドエンジニア</li>
                    </ul>
                </div>
                <div className="member_item"><img src="../common/img/tantan.png" alt="タンタン" />
                    <h2>タンタン</h2>
                    <ul>
                        <li><a href="https://leadspace.co.jp/" target="_blank">リードスペース株式会社</a></li>
                        <li>デザイナー</li>
                    </ul>
                </div>
            </section>
        </article>
    )
}

export default AboutSection
