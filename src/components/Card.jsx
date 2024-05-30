import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import {
  incrementPrice,
  incrementProduct,
  incrementQuantity,
  decrementPrice,
  decrementQuantity,
  decrementProduct,
} from "../cart";

function Card(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart.cartproducts;
  });

  function addProduct() {
    toast.success('Product Successfully Added..')
    dispatch(incrementPrice(props.details.price));
    dispatch(incrementQuantity());
    dispatch(incrementProduct(props.details));
  }
  function removeProduct() {
    toast.error('Product removed..')
    dispatch(decrementPrice(props.details.price));
    dispatch(decrementQuantity());
    dispatch(decrementProduct(props.details.id));
  }
  return (
    <div className="card shadow-gray-300 shadow-xl h-[380px] w-[280px] border border-1 border-black flex justify-around items-center flex-col gap-3 bg-white p-3 rounded-xl text-center hover:scale-105 transition-all ease-out duration-300 hover:shadow-gray-950 group hover:shadow-2xl">
      <h1 className="font-bold">{`${props.details.title.slice(0, 40)}...`}</h1>
      <p className=" text-xs">{`${props.details.description.slice(
        0,
        80
      )}....`}</p>
      <img className="w-[7rem]" src={props.details.image} alt="" />
      <div className="cartDetails flex items-center gap-6 justify-between w-full ">
        <span className="text-xl font-bold text-green-600">{`$${props.details.price}`}</span>
        {cart.some(p => p.id == props.details.id) ? (
          <button
          onClick={removeProduct}
          className=" font-semibold addToCart border border-3 border-black rounded-2xl p-2 group-hover:bg-gray-700 group-hover:text-white"
        >
          Remove Item
        </button>
        ) : (
            <button
            onClick={addProduct}
            className=" font-semibold addToCart border border-3 border-black rounded-2xl p-2 group-hover:bg-gray-700 group-hover:text-white"
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
    
  );
}
export default Card;
