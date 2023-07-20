import { React } from "react";
import img from "../assets/itemImg.png";
import data from "../data/itemsList.json";

function ItemBlock( { src, alt, message, title, desc, colors, price  } ) {
    let colorsText;

    colors > 1 ? colorsText = "Colors" : colorsText = "Color";
    
    return (
        <div className="w-auto h-auto">
            <img src={ src } alt={ alt } className="w-full h-auto"></img>

            <div className="w-auto h-auto p-3">
                <p className="text-sm text-red-600"> { message } </p>
                <p className="text-sm text-black"> { title } </p>
                <p className="text-sm text-gray-500"> { desc } </p>
                <p className="text-sm text-gray-500"> { colors } { colorsText } </p>
                <p className="text-sm text-black pt-3"> ${ price } </p>
            </div>
        </div>
    );
}

function AllItemsList() {
    const listOfItems = data.itemsList.map( item => 
        <ItemBlock src={ img } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } />    
    );

    return (
        <div className="w-full h-auto grid grid-cols-2 gap-2 min-[960px]:grid-cols-3 min-[960px]:w-4/5">
            { listOfItems }
        </div>
    );
}

export default AllItemsList;