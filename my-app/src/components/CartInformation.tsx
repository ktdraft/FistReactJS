import React, { Children, Component } from "react";
import "../generel.css";
import "../home.css";
import "../cart.css";
import "../admin.css";
import CartItem from "./CartItem";
import { ProductModel } from "../model/Product";
import { ItemModel } from "../model/ItemModel";
import { useState } from "react";



type Props = {
   changeItemCount: (itemCount: number) => void
}
const getCardFromLocalStorage = (): ItemModel[] => {
   let listItems: ItemModel[] = [];
   let jsonItems = localStorage.getItem("listItem");

   if (jsonItems != "" && jsonItems != null) {
      listItems = JSON.parse(jsonItems);
   }

   return listItems;
};

const findProductById = (id: string) => {
   let listProduct: ProductModel[] = JSON.parse(
      localStorage.getItem("listProduct") || ""
   );
   let product: ProductModel =
      listProduct.find((item) => {
         return item.id === id;
      }) || ({} as ProductModel);

   return product;
};

const CalculatorTotalPrice = () => {
   let TotalPrice = 0;
   let jsonItems = localStorage.getItem("listItem");

   if (jsonItems !== "" && jsonItems !== null) {
      let listItems: ItemModel[] = JSON.parse(
         localStorage.getItem("listItem") || ""
      );

      if (listItems.length !== 0) {
         TotalPrice = listItems
            .map((item) => {
               let infoProduct = findProductById(item.id);
               return (
                  (infoProduct.price - (infoProduct.price * infoProduct.percentDiscount) / 100) * item.value
               );
            }).reduce((a, b) => {
               return a + b;
            });
      }
   }

   return TotalPrice;
};

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

export default function CartInformation(props: Props) {
   const [cartItems, setCartItems] = useState<ItemModel[]>(
      getCardFromLocalStorage()
   );
   const [totalPriceCart, setTotalPriceCart] = useState<number>(
      CalculatorTotalPrice()
   );
   return (
      <div>
         <div className="all-frame">
            <div className="khung-chua-my-card">
               <div className="header-my-cart">Giỏ hàng của tôi</div>
               <div id="my-cart">
                  {cartItems.map((item) => {
                     
                     let infoProduct = findProductById(item.id);
                     return (
                        <CartItem
                           image={infoProduct.image}
                           percentDiscount={infoProduct.percentDiscount}
                           id={item.id}
                           name={infoProduct.name}
                           price={infoProduct.price - (infoProduct.price * infoProduct.percentDiscount) / 100}
                           count={item.value}
                           total={
                              item.value *
                              (infoProduct.price -
                                 (infoProduct.price * infoProduct.percentDiscount) / 100)
                           }
                           onChangeCount={(id, count) => {

                              const updatedCartItems = cartItems.slice();
                              let index = updatedCartItems.findIndex((x) => x.id === id);

                              if (count < 0) {
                                 updatedCartItems.splice(index, 1);

                                 setCartItems(updatedCartItems);
                              } else {
                                 updatedCartItems[index].value = count;

                                 setCartItems(updatedCartItems);
                                 localStorage.setItem(
                                    "listItem",
                                    JSON.stringify(updatedCartItems)
                                 );
                                 setTotalPriceCart(CalculatorTotalPrice);
                              }
                              props.changeItemCount(calculatorItemCount())
                           }}
                           removeItem={(id) => {
                              const updatedCartItems = cartItems.slice();

                              let index = updatedCartItems.findIndex((x) => x.id === id);
                              updatedCartItems.splice(index, 1);

                              setCartItems(updatedCartItems);
                              localStorage.setItem(
                                 "listItem",
                                 JSON.stringify(updatedCartItems)
                              );
                              setTotalPriceCart(CalculatorTotalPrice);
                              props.changeItemCount(calculatorItemCount())
                           }}

                        />
                     );
                  })}
               </div>
            </div>
            <div className="check-out">
               <div className="header-my-cart">Thông tin mua hàng</div>
               <div className="dien-thong-tin">
                  <div className="frame-input">
                     <i className="fas fa-user" />
                     <input type="text" placeholder="Nhập họ và tên" id="user" />
                     <label htmlFor="user" className="error" />
                  </div>
                  <div className="frame-input">
                     <i className="fas fa-phone-alt" />
                     <input
                        type="text"
                        placeholder="Số Điện Thoại"
                        id="phone-number"
                     />
                     <label htmlFor="phone-number" className="error" />
                  </div>
                  <div className="frame-input">
                     <i className="fas fa-envelope" />
                     <input type="email" placeholder="Email" id="email" />
                     <label htmlFor="email" className="error" />
                  </div>
                  <div className="frame-input">
                     <i className="fas fa-map-marker-alt" />
                     <input type="text" placeholder="Địa chỉ nhận hàng" id="address" />
                     <label htmlFor="address" className="error" />
                  </div>
                  <div className="tinhTien" id="tinhTien1">
                     Total Price:{" "}
                     {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                     }).format(totalPriceCart)}
                  </div>
                  <div className="xac-nhan-don-hang">
                     <button className="bntXacNhan">Xác Nhận Đơn Hàng</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
