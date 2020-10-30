import React, { Component } from "react";
import Product from "./Product";


const listProduct = [
    {
        "ten": "LG G7",
        "hinhAnh": "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
        "giaGoc": 3700000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/603/200/300.jpg?hmac=7egn04uCRc_cYvj1RxmKD8W1ySpBC3Ut8GFrvACb4x0",
        "giaGoc": 4800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/603/200/300.jpg?hmac=7egn04uCRc_cYvj1RxmKD8W1ySpBC3Ut8GFrvACb4x0",
        "giaGoc": 4800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/603/200/300.jpg?hmac=7egn04uCRc_cYvj1RxmKD8W1ySpBC3Ut8GFrvACb4x0",
        "giaGoc": 4800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/9/200/300.jpg?hmac=BguC5kAGl-YR4FEjhjm0b2XWbynYsk3s3QQZUie5aBo",
        "giaGoc": 5800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/388/200/300.jpg?hmac=FqnHWJj6cpEwyS23t-YvE6ouWqr3LEKTKMo4ohOrTUI",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/388/200/300.jpg?hmac=FqnHWJj6cpEwyS23t-YvE6ouWqr3LEKTKMo4ohOrTUI",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/388/200/300.jpg?hmac=FqnHWJj6cpEwyS23t-YvE6ouWqr3LEKTKMo4ohOrTUI",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/388/200/300.jpg?hmac=FqnHWJj6cpEwyS23t-YvE6ouWqr3LEKTKMo4ohOrTUI",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/388/200/300.jpg?hmac=FqnHWJj6cpEwyS23t-YvE6ouWqr3LEKTKMo4ohOrTUI",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "device",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/233/200/300.jpg?hmac=aVpewfxURvNso_n34jznb-DOcy5vizCqhqwd-YIcKAM",
        "giaGoc": 7800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "laptop",
        "ID": "58170866271603874895311"
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/233/200/300.jpg?hmac=aVpewfxURvNso_n34jznb-DOcy5vizCqhqwd-YIcKAM",
        "giaGoc": 7800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "laptop",
        "ID": "58170866271603874895311"
    },{
        "ten": "LG G8",
        "hinhAnh": "https://i.picsum.photos/id/233/200/300.jpg?hmac=aVpewfxURvNso_n34jznb-DOcy5vizCqhqwd-YIcKAM",
        "giaGoc": 7800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "laptop",
        "ID": "58170866271603874895311"
    }
]

export default class Home extends Component<PropsType, {}> {
    render() {
        let nameTitle = {}
        return (
            <div className="product">
                <div className="header-product">
                    <div className="content-header">
                        <a href="#">
                            <h1>{this.props.title}</h1>
                        </a>
                    </div>
                </div>
                <div className="frame-product-all" id="show-phone">
                    {listProduct.filter((product) => {
                        return product.type === this.props.type;
                    }).map((product) => {
                        return (
                            <Product
                                imgage={product.hinhAnh}
                                type={this.props.action}
                                name={product.ten}
                                price={product.giaGoc}
                                discount={product.phamTramGiamGia}
                                typeOfProduct={product.type}
                            ></Product>)
                    })}
                </div>
                <div className="load-more">Xem thêm</div>
            </div>
        );
    }


}

interface PropsType {
    title: string,
    action: string,
    type: string
}