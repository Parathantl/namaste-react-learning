import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const cart = useSelector(state => state.cartReducer.cartItems);

    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg  lg: bg-green-50">
            <div>
                <img className="w-56" src={LOGO_URL} alt="logo" />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">

                    <li className="px-4">
                        Online Status: { onlineStatus ? 'Online' : 'Offline' }
                    </li>

                    <li className="px-4">
                    <Link to={'/'}>Home</Link>
                    </li>

                    <li className="px-4">
                    <Link to={'/grocery'}>Grocery</Link>
                    </li>

                    <li className="px-4">
                    <Link to={'/about'}>About</Link>
                    </li>

                    <li className="px-4">
                    <Link to={'/contact'}>Contact</Link>
                    </li>

                    <li className="px-4">
                        <Link to={'/cart'}>Cart</Link>
                    </li>

                    <button className="login" onClick={() =>
                        {
                            setBtnName("Logout")
                        }
                    }>{btnName}</button>
                    
                    <li>{loggedInUser}</li>

                </ul>
            </div>
        </div>
    );
}

export default Header;