import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import Empty from "./Empty";
import {toast} from 'react-hot-toast'
import { decrementPrice, decrementQuantity, decrementProduct } from "../cart";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => {
    return state.cart.cartproducts;
  });
  const totalPrice = useSelector((state) => {
    return state.cart.price;
  });
  const totalQuantity = useSelector((state) => {
    return state.cart.quantity;
  });

  function deleteProduct(product) {
    toast.error('Product removed..')
    dispatch(decrementPrice(product.price));
    dispatch(decrementQuantity());
    dispatch(decrementProduct(product.id));
  }

  

  return (
    <>
      {totalQuantity === 0 ? (
        <Empty />
      ) : (
        <div className="cart w-full flex flex-col gap-7  pt-10 pb-24 lg:flex-row ">
          <div className="products flex flex-col gap-10 w-[90%] mx-auto lg:w-[60%]">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row gap-7 border border-1 border-black p-4 rounded-xl shadow-2xl shadow-gray-300"
                >
                  <img className="w-[10rem] mx-auto" src={product.image} alt="" />

                  <div className="detail flex flex-col justify-center">
                    <h1 className="font-bold text-lg mb-1">{product.title}</h1>
                    <p className="text-md">{product.description.slice(0, 100)}...</p>
                    <div className=" flex items-center justify-between price-detail mt-5 text-xl font-bold text-blue-600">
                      <p>${product.price}</p>
                      <div onClick={()=>{deleteProduct(product)}} className="delete bg-red-100 text-red-700 p-4 border rounded-full">
                        <MdDelete />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary flex flex-col p-2 w-[40%] mx-auto min-w-[300px]">
            <h1 className="text-blue-900 text-3xl font-semibold">YOUR CART</h1>
            <h2 className="text-blue-900 text-5xl font-semibold">SUMMARY</h2>
            <p className="text-xl font-bold mt-4">Total Items: {totalQuantity}</p>
            <p className="text-2xl font-bold">
              Total Amount:
              <span className="text-blue-700"> ${totalPrice} </span>
            </p>
            <button className=" mt-5 px-5 py-3 bg-blue-500 text-white text-2xl border rounded-full">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
