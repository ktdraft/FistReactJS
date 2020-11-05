import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slide from './components/Slide';
import { uuid } from "uuidv4";
import { ProductModel } from './model/Product';

import {
   BrowserRouter as Router,
   Route
} from "react-router-dom";

import ProductHome from './components/ProductHome';
import CartInformation from './components/CartInformation'
import AdminProduct from './components/AdminHome';
import { useState } from 'react';
import { ItemModel } from './model/ItemModel';

const createDataProducts = () => {
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

   localStorage.setItem("listProduct", JSON.stringify(x));
}

const createDataItems = () => {
   const listItems: ItemModel[] = [
      {
         id: "4cd305df-abeb-467d-ba97-d52f168a9a6e",
         value: 2
      },
      {
         id: "1fd964f1-ac04-433a-9aa6-511ed36952c8",
         value: 10
      }
   ];

   localStorage.setItem("listItem", JSON.stringify(listItems));
}

const noExistProductLocal = (): boolean => {
   let jsonProduct = localStorage.getItem('listProduct')
   if (jsonProduct === '' || jsonProduct === null) {
      return true;
   }
   console.log(jsonProduct)
   return false;
}

const noExistItemLocal = (): boolean => {
   let jsonItem = localStorage.getItem('listItem')
   if (jsonItem === '' || jsonItem === null) {
      return true;
   }
   return false;
}


function App() {
   if (noExistProductLocal()) {
      createDataProducts()
   }

   if (noExistItemLocal()) {
      createDataItems()
   }

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

   const [countItem, setCountItem] = useState<number>(calculatorItemCount())

   return (
      <div>
         <Router>
            <Header countItem={countItem}></Header>
            <Slide></Slide>

            <Route path="/" exact>
               <ProductHome
                  changeItemCount={(count) => {
                     setCountItem(count)
                  }}
                  title={"Smart Phone"}
                  type={"phone"} />
               <ProductHome
                  changeItemCount={(count) => {
                     setCountItem(count)
                  }}
                  title={"Device"}
                  type={"device"} />
               <ProductHome
                  changeItemCount={(count) => {
                     setCountItem(count)
                  }}
                  title={"Laptop"}
                  type={"laptop"} />
            </Route>

            <Route path="/admin/" exact>
               <AdminProduct
                  title={"Smart phone"}
                  action={"Edit this product"}
                  type={"phone"} />

               <AdminProduct
                  title={"Device"}
                  action={"Edit this product"}
                  type={"device"} />
               <AdminProduct
                  title={"Laptop"}
                  action={"Edit this product"}
                  type={"laptop"} />
            </Route>

            <Route path="/cart/">
               <CartInformation
                  changeItemCount={(count) => {
                     setCountItem(count)
                  }}
               />
            </Route>

            <Footer></Footer>
         </Router>
      </div>
   );


}

export default App;
