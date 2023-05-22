import React from "react";

import "../styles/Header.css"
import companyIcon from "../img/company-icon.svg";
import shopIcon from "../img/shop.svg"
import checkoutIcon from "../img/checkout.svg"

function Header() {
    return (
        <div className="sticky-header">
            <div className="content">
                <img className="icon" src={companyIcon} width={'70px'} />
                <h1>The Divot Den</h1>
                <div className="shop-checkout-icons">
                    <img className="icon" src={shopIcon} width={"50px"} />
                    <img className="icon checkout-icon" src={checkoutIcon} width={"45px"} />
                </div>
            </div>
        </div>
    )
}

export default Header