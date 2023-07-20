import { React, useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import menu from "../assets/menu.svg";
import nextSign from "../assets/next-sign.svg";

function LogoBlock( { logo } ) {
    return (
        <div className="w-20 h-full ml-3 ">
            <img src={ logo } alt="logo." className="w-auto h-auto"></img>
        </div>
    );
}

function NavBarLink( { link, title } ) {
    return (
        <li className="w-auto h-auto text-base font-semibold">
            <a href={ link }> { title } </a>
        </li>
    );
}

function NavBar() {
    const [menuBlockStyle, setMenuBlockStyle] = useState( "w-full h-full absolute hidden" );

    const showMenu = () => setMenuBlockStyle( "w-full h-full absolute top-0" );
    const hideMenu = () => setMenuBlockStyle( "w-full h-full absolute hidden" );

    const navBarLinksList = [
        { "link": "#", "title": "New & Featured" },
        { "link": "#", "title": "Men" }
    ];

    const displayNavBarLinksList = navBarLinksList.map( item => 
        <NavBarLink link={ item.link } title={ item.title } />  
    );

    return (
        <div className="w-full h-14 flex justify-between items-center min-[960px]:px-5">
            <LogoBlock logo={ logo } />

            <div className="w-1/2 h-auto hidden justify-center items-center min-[960px]:flex">
                <nav>
                    <ul className="w-auto h-auto flex space-x-6">
                        { displayNavBarLinksList }
                    </ul>
                </nav>
            </div>

            <div className="w-44 h-10 bg-gray-100 rounded-3xl hidden items-center absolute right-24 min-[960px]:flex">
                <img src={ search } alt="search sign." className="w-6 h-6 ml-2"></img>

                <input type="text" placeholder="Search" className="w-full ml-4 bg-gray-100 rounded-r-3xl pr-4 outline-none placeholder:text-gray-300 placeholder:font-semibold"></input>
            </div>

            <div className="w-auto h-auto flex justify-end items-center mr-6 space-x-4">
                <img src={ search } alt="search." className="h-6 w-6 min-[960px]:hidden"></img>
                <img src={ bag } alt="bag." className="h-auto w-10"></img>
                <img src={ menu } alt="menu." className="h-6 w-6 min-[960px]:hidden" onClick={ showMenu }></img>
            </div>

            <div className={ menuBlockStyle }>
                <div className="w-1/6 h-full absolute bg-black/40 backdrop-blur-sm"></div>

                <div className="w-5/6 h-full absolute right-0 bg-white">
                    <button className="w-auto h-auto text-xl mt-5 absolute right-8" onClick={ hideMenu }>
                        ✕
                    </button>

                    <div className="w-64 h-auto ml-9 mt-14 space-y-5">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> New Arrivals </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> Men </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> Women </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> Kids </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> Accessories </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> All Sale </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-medium"> Member Sale: Up to 25% Off </p>
                            <img src={ nextSign } alt="next sign." className="w-5 h-6"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;