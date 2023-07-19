import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import menu from "../assets/menu.svg";

function LogoBlock( { logo } ) {
    return (
        <div className="h-auto w-28 ml-4">
            <img src={ logo } alt="logo." className="h-auto w-auto"></img>
        </div>
    );
}

function NavBar() {
    return (
        <div className="w-full h-14 flex">
            <LogoBlock logo={ logo } />

            <div className="w-full h-auto flex justify-end items-center mr-6 space-x-4">
                <img src={ search } alt="search." className="h-6 w-6"></img>
                <img src={ bag } alt="bag." className="h-auto w-10"></img>
                <img src={ menu } alt="menu." className="h-6 w-6"></img>
            </div>
        </div>
    );
}

export default NavBar;