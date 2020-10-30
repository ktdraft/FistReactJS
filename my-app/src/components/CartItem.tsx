import React, { Component } from 'react'

export default class CartItem extends Component<PropsCartItem, {}> {
    render() {
        return (
            <div className="khungItem">
                <div className="hinhAnhItem">
                    <img src={this.props.imgage} alt="" />
                </div>
                <div className="khungTenVaGia">
                    <div className="tenItem">
                        <p>{this.props.name}</p>
                    </div>
                    <div className="GiaItem">
                        <p>{this.props.price}</p>
                    </div>
                </div>
                <div className="soLuongItem">
                    <input type="number" className="soLuong" id="" value={this.props.count} />
                </div>
                <div className="thanhTien">{this.props.total}</div>
                <button className="xoaItemGioHang"><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}

interface PropsCartItem {
    imgage: string,
    name: string,
    price: number,
    count: number,
    total: number

}
