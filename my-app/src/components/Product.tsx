import React, { Component } from "react";
import { ProductModel } from "../model/Product";
import { ItemModel } from "../model/ItemModel";
import { uuid } from "uuidv4";

export default function Product(props: Props) {
   return (
      <div className="khungSanPham">
         <div className="hinhAnhSanPham " id={props.id}>
            <img src={props.image} alt="" />
            <button className="bnt" onClick={(event) => props.addToCart(props.id)}>
               <p>Add to cart</p>
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
   )
}

interface Props {
   id: string;
   image: string;
   name: string;
   price: number;
   discount: number;
   typeOfProduct: string;
   addToCart(id: string): void;
}  
