import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';

export default class Slide extends Component {
    render() {
        return (
            <div className="slider">
                <div className="slider-item">
                    <button>Mua ngay</button>
                    <p>Smart Phone<br /> GIÁ CỰC HẤP DẪN</p>
                    <img src="" alt=""/>
                </div>
                
                <div className="slider-bn2">
                    <span className="btn-change" id="index0"><i className="far fa-circle" /></span>
                    <span className="btn-change" id="index1"><i className="far fa-circle" /></span>
                    <span className="btn-change" id="index2"><i className="far fa-circle" /></span>
                    <span className="btn-change" id="index3"><i className="far fa-circle" /></span>
                </div>
            </div>
        )
    }
}
