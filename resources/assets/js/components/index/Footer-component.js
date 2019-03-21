import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Stateless Functions
const Footer = props =>{
    return(
        <footer class="footer">
            <p>&copy; 2016 - 2018 広島フロントエンド勉強会.</p>

            <a class="btn_share" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhirofuro.org%2F&amp;amp;src=sdkpreparse" target="_blank"><i class="fab fa-facebook-square"></i><span>Facebookでシェア</span></a>
        </footer>
    )
}

export default Footer
