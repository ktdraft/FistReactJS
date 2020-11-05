import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';
import DiaLogAdd from './DiaLogAdd';
import { useState } from 'react'
import { uuid } from 'uuidv4';
import { ProductModel } from '../model/Product';
import { Link } from 'react-router-dom';

export default function Header(props: Props) {
    const [statusAdd, setStatusAdd] = useState<boolean>(false)

    const [getImage, setGetImage] = useState<string>("");
    const [getName, setGetName] = useState<string>("");
    const [originPrice, setOriginPrice] = useState<number>(0);
    const [getDiscount, setGetDiscount] = useState<number>(0);

    const [openIconCart, setOpenIconCart] = useState<boolean>(true);
    const [openIconAdd, setOpenIconAdd] = useState<boolean>(false);

    const closeDialog = () => {
        setStatusAdd(false)
    }

    const openDialogAdd = () => {
        setStatusAdd(true)
    }

    const changeImage = (event: any): void => {
        setGetImage(event.target.value)
    }

    const changeName = (event: any): void => {
        setGetName(event.target.value)
    }

    const changePrice = (event: any): void => {
        setOriginPrice(event.target.value)
    }

    const changeDiscount = (event: any): void => {
        setGetDiscount(event.target.value)
    }

    const changIcon = () => {
        setOpenIconAdd(true)
        setOpenIconCart(false)
    }

    return (
        <div className="frameMenu">
            <div className="logo">
                <a href="index.html"><img src="#" alt="" /></a>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Điện thoại</a>
                        <ul>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Samsung</a></li>
                            <li><a href="#">Xiaomi</a></li>
                            <li><a href="#">Oppo</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Laptop</a>
                        <ul>
                            <li><a href="#">Lenovo</a></li>
                            <li><a href="#">Dell</a></li>
                            <li><a href="#">Macbook</a></li>
                            <li><a href="#">Asus</a></li>
                            <li><a href="#">MSI</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Phụ kiện</a>
                        <ul>
                            <li><a href="#">Tai nghe</a></li>
                            <li><a href="#">Loa</a></li>
                            <li><a href="#">Bàn phím</a></li>
                            <li><a href="#">Chuột máy tính</a></li>
                            <li><a href="#">Bàn phím</a></li>
                            <li><a href="#">Chuột máy tính</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Thông tin</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
            <DiaLogAdd
                show={statusAdd} close={closeDialog}
                image={getImage} name={getName}
                price={originPrice}
                discount={getDiscount}
                add={(thisId, thisImage, thisName, thisPrice, thisDiscount) => {
                    let listProductFromLocalStorage: ProductModel[]
                        = JSON.parse(localStorage.getItem('listProduct') || "")

                    let newProduct: ProductModel = {
                        id: thisId,
                        price: thisPrice,
                        image: thisImage,
                        place: 'HaNoi',
                        percentDiscount: thisDiscount,
                        name: thisName,
                        type: 'Phone'
                    }

                    listProductFromLocalStorage.push(newProduct)
                    localStorage.setItem('listProduct', JSON.stringify(listProductFromLocalStorage))
                }}
                changeImage={changeImage}
                changeName={changeName}
                changePrice={changePrice}
                changeDiscount={changeDiscount}
            />
            <div className="account">
                <div className="login">
                    <Link to="/admin/" onClick={changIcon}>
                        <i className="fas fa-user-shield"></i>
                    </Link>
                </div>
                <div className="cart">
                    <Link to="/cart/" style={{ display: openIconCart ? "block" : "none" }}>
                        <i className="fas fa-cart-plus"></i>
                        <p className="cart-number">{props.countItem}</p>
                    </Link>
                    <i className="fas fa-edit"
                        style={{ display: openIconAdd ? "block" : "none" }}
                        onClick={openDialogAdd}
                    />
                </div>
            </div>
        </div>
    )
}

interface Props {
    countItem: number;
}