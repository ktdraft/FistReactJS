import React, { Component } from "react";

import { ProductModel } from "../model/Product";
// import { uuid } from "uuidv4";
import DiaLogEdit from '../components/DiaLogEdit';
import { useState } from "react";

export default function Admin(props: Props) {
    const [statusDiaLog, setStatusDiaLog] = useState<boolean>(false);
    const [getImage, setGetImage] = useState<string>(props.image);
    const [getName, setGetName] = useState<string>(props.name);

    const [getDiscount, setGetDiscount] = useState<number>(props.discount);
    const [originPrice, setOriginPrice] = useState<number>(props.price);

    const editProduct = (idProduct: string) => {
        setStatusDiaLog(true);
    }

    const closeDialog = () => {
        setStatusDiaLog(false);
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

    return (
        <div>
            <DiaLogEdit
                show={statusDiaLog} close={closeDialog}
                image={getImage} name={getName}
                price={originPrice}
                discount={getDiscount}
                id={props.id}
                edit={(event) => props.edit(props.id, getImage, getName, originPrice, getDiscount)}
                changeImage={changeImage}
                changeName={changeName}
                changePrice={changePrice}
                changeDiscount={changeDiscount}
            />

            <div className="khungSanPham">
                <div className="hinhAnhSanPham " id={props.id}>
                    <img src={props.image} alt="" />
                    <button className="bnt" onClick={() => editProduct(props.id)}>
                        <p>{props.type}</p>
                    </button>

                </div>
                <h3 className="tenSanPham">{props.name}</h3>
                <p className="giaSauKhiGiam">
                    {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                    }).format(props.price - props.price * props.discount / 100)}
                </p>
                <div className="phanTramGiam">Sale {props.discount} %</div>

            </div>
        </div>

    )
}

interface Props {
    id: string;
    image: string;
    type: string;
    name: string;
    price: number;
    discount: number;
    typeOfProduct: string;
    edit(
        idEdit: string,
        imgEdit: string,
        nameEdit: string,
        priceEdit: number,
        discountEdit: number
    ): void;
}
