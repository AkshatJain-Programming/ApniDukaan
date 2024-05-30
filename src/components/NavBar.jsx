import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
    const quantity = useSelector(state=> {return state.cart.quantity})
  return (
    <div className="bg-gray-900 w-full h-20">
    <div className="nav  flex justify-between min-w-[300px] w-[80%] mx-auto px-1 items-center">
      <img className="h-[80px]" src={logo} alt="logo" />
      <div className="navLinks flex text-white font-bold text-xl gap-9">
        <div className="home hover:text-blue-400 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </div>
        <NavLink to="/cart">
          <div className="cart hover:text-blue-400 cursor-pointer relative flex  items-center gap-3">
            {
                quantity > 0 ? (<div className="number absolute top-[-5px] left-4 text-white bg-blue-700 text-sm animate-bounce px-[0.4rem] rounded-full  ">{quantity}</div>) : ""
            }
            
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </div>
        </NavLink>
      </div>
    </div>
    </div>
  );
}
export default NavBar;
