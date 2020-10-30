import React, { Component } from 'react'

export default class Product extends Component<PropsProduct, {}> {
    render() {
        return (
            <div className="khungSanPham" >
                <div className="hinhAnhSanPham " id="">
                    <img src={this.props.imgage} alt="" />
                    <button className="bnt">
                        <p>{this.props.type}</p>
                    </button>
                </div>
                <h3 className="tenSanPham">{this.props.name}</h3>
                <p className="giaSauKhiGiam">{this.props.price} VND</p>
                <div className="phanTramGiam">Sale {this.props.discount} %</div>
            </div>
        )
    }
}

interface PropsProduct {
    imgage: string,
    type: string,
    name: string,
    price: number,
    discount: number
}
