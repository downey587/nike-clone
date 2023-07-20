import React from "react";
import filters from "../assets/filters.svg";

function FiltersButton( { resultsNumber, onClick } ) {
    return (
        <div className="w-full h-14 flex justify-between items-center px-5 min-[960px]:w-36 min-[960px]:absolute min-[960px]:top-36 min-[960px]:right-11">
            <h1 className="text-base text-gray-600 min-[960px]:hidden"> { resultsNumber } Results </h1>

            <button onClick={ onClick } className="w-28 h-8 text-base font-semibold flex border border-gray-300 rounded-2xl justify-center items-center">
                Filter <img src={ filters } alt="filters." className="w-auto h-7 ml-1"></img>
            </button>
        </div>
    );
}

export default FiltersButton;