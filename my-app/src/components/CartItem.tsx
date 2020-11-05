import React, { Component } from "react";

export default function CartItem(props: Props) {
   return (
      <div className="khungItem">
         <div className="hinhAnhItem">
            <img src={props.image} alt="" />
         </div>
         <div className="khungTenVaGia">
            <div className="tenItem">
               <p>{props.name}</p>
            </div>
            <div className="GiaItem">
               <p>
                  {new Intl.NumberFormat("de-DE", {
                     style: "currency",
                     currency: "VND",
                  }).format(props.price)}
               </p>
            </div>
         </div>
         <div className="soLuongItem">
            <input
               type="number"
               className="soLuong"
               id={props.id}
               value={props.count}
               onChange={(event) => {
                  props.onChangeCount(props.id, Number(event.target.value));
               }}
            />
         </div>
         <div className="thanhTien">
            {new Intl.NumberFormat("de-DE", {
               style: "currency",
               currency: "VND",
            }).format(props.total)}
         </div>
         <button
            className="xoaItemGioHang"
            onClick={(event) => props.removeItem(props.id)}
         >
            <i className="fas fa-trash"></i>
         </button>
      </div>
   );
}

interface Props {
   id: string;
   image: string;
   name: string;
   price: number;
   count: number;
   total: number;
   percentDiscount: number;
   onChangeCount(id: string, count: number): void;
   removeItem(id: string): void;
}
