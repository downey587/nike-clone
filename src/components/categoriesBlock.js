import React from "react";
import data from "../data/categoriesList.json";

function CategoryBlock( { link, title } ) {
    return (
        <li className="text-base">
            <a href={ link }> { title } </a>
        </li>
    );
}

function CategoriesBlock() {
    const categoriesListElements = data.categoriesList.map( item =>
        <CategoryBlock link={ item.link } title={ item.title } />    
    );

    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto">
                <nav>
                    <ul className="flex space-x-8 overflow-x-scroll no-scrollbar px-5">
                        { categoriesListElements }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoriesBlock;