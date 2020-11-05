import React from "react";
import Product from "./Product";
import { ProductModel } from "../model/Product";
import { ItemModel } from '../model/ItemModel';
import { useState } from 'react';

const calculatorItemCount = (): number => {
   let itemCount = 0
   let listItem: ItemModel[] = JSON.parse(localStorage.getItem('listItem') || "");

   if (listItem.length > 0) {
      itemCount = listItem.map((item) => {
         return item.value
      }).reduce((x, y) => {
         return x + y
      })
   }
   return itemCount
}

const getListProducts = (): ProductModel[] => {
   let listProducts: ProductModel[] = JSON.parse(localStorage.getItem('listProduct') || "")

   return listProducts;
}

const getListItems = (): ItemModel[] => {
   let listItems: ItemModel[] = JSON.parse(localStorage.getItem('listItem') || "")

   return listItems;
}


export default function Home(props: PropsType) {

   let listProducts: ProductModel[] = getListProducts()

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
            {listProducts
               .filter((product) => {
                  return product.type.toLowerCase() === props.type.toLowerCase();
               })
               .map((product) => {
                  return (
                     <Product
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        discount={product.percentDiscount}
                        typeOfProduct={product.type}

                        addToCart={(thisId) => {
                           let listItemsUpdated: ItemModel[] = JSON.parse(localStorage.getItem('listItem') || "")

                           let noExist = true
                           listItemsUpdated.forEach(element => {
                              if (element.id === thisId) {
                                 noExist = false
                                 ++element.value
                              }
                              return
                           });

                           if (noExist) {
                              let newItem: ItemModel = { id: thisId, value: 1 }
                              listItemsUpdated.push(newItem)
                           }

                           localStorage.setItem('listItem', JSON.stringify(listItemsUpdated))
                           props.changeItemCount(calculatorItemCount())

                           alert('Add successfully!')
                        }}
                     ></Product>

                  );
               })}

         </div>
         <div className="load-more">Xem thêm</div>
      </div>
   )
}

interface PropsType {
   title: string;
   type: string;
   changeItemCount(count: number): void;
}


// {
//    "id": uuid(),
//    "price": 134324323,
//    "image":
//       "https://i.picsum.photos/id/477/200/300.jpg?hmac=Y-uy4_ZZZ6HOZCxdiN04OOypBZ3y2dY2gAfu9MvZMSE",
//    "place": "string;",
//    "percentDiscount": 10,
//    "name": "ggg;",
//    "type": "laptop",
// }
