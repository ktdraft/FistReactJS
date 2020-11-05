import React, { Component } from "react";
import Admin from '../components/Admin';
import { ProductModel } from "../model/Product";
import { uuid } from "uuidv4";
import { useState } from "react";

const getDataFromLocalStorage = (): ProductModel[] => {
   let listProduct: ProductModel[] = JSON.parse(localStorage.getItem('listProduct') || "")
   return listProduct
}

export default function AdminProduct(props: PropsType) {

   const createData = () => {
      const x: ProductModel[] = [
         {
            id: uuid(),
            price: 145645654,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 54,
            name: "ggg;",
            type: "phone",
         },
         {
            id: uuid(),
            price: 15464564,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 16,
            name: "ggg;",
            type: "phone",
         },
         {
            id: uuid(),
            price: 16554,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 4,
            name: "ggg;",
            type: "phone",
         },
         {
            id: uuid(),
            price: 143534,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 15,
            name: "ggg;",
            type: "phone",
         },
         {
            id: uuid(),
            price: 1,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 10000000000,
            name: "ggg;",
            type: "device",
         },
         {
            id: uuid(),
            price: 134324323,
            image:
               "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
            place: "string;",
            percentDiscount: 10,
            name: "ggg;",
            type: "laptop",
         },
      ];
      let y = localStorage.setItem("listProduct", JSON.stringify(x));
      return JSON.parse(localStorage.getItem("listProduct") || "");
   }

   const [listProduct, setListProduct] = useState<ProductModel[]>(
      getDataFromLocalStorage()
   );

   return (
      <div className="product">
         <div className="header-product">
            <div className="content-header">
               <a href="#">
                  <h1>{props.title}</h1>
               </a>
            </div>
         </div>
         <div className="frame-product-all" id="show-phone">
            {listProduct
               .filter((product) => {
                  return product.type === props.type;
               })
               .map((product) => {
                  return (
                     <Admin
                        id={product.id}
                        image={product.image}
                        type={props.action}
                        name={product.name}
                        price={product.price}
                        discount={product.percentDiscount}
                        typeOfProduct={product.type}
                        edit={(thisID, thisImage, thisName, thisPrice, thisDiscount) => {

                           let listProductFromLocal: ProductModel[] = JSON.parse(localStorage.getItem('listProduct') || "")
                           listProductFromLocal.forEach(element => {
                              if (element.id === thisID) {
                                 element.image = thisImage;
                                 element.name = thisName;
                                 element.image = thisImage;
                                 element.price = thisPrice;
                                 element.percentDiscount = thisDiscount;
                                 console.log(thisName)
                                 console.log(element.name)
                              }
                              return
                           });

                           let listProductFromLocalUpdated = listProductFromLocal.slice()
                           setListProduct(listProductFromLocalUpdated)
                           localStorage.setItem('listProduct', JSON.stringify(listProductFromLocalUpdated))
                           alert('Edit successfully!')

                        }}
                     ></Admin>
                  );
               })}
         </div>
         <div className="load-more">Xem thêm</div>
      </div>
   )
}

interface PropsType {
   title: string;
   action: string;
   type: string;
}
