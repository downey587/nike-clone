import { React } from "react";

export function ItemBlock( { src, alt, message, title, desc, colors, price, gender  } ) {
    let colorsText;

    colors > 1 ? colorsText = "Colors" : colorsText = "Color";

    let descContent;

    if ( gender === "men" ) descContent = "Men's ";
    else if ( gender === "women" ) descContent = "Women's ";
    else if ( gender === "kids" ) descContent = "Kids' ";
    else if ( gender === "unisex" ) descContent = "Unisex' ";
    
    return (
        <div className="w-auto h-auto">
            <img src={ src } alt={ alt } className="w-full h-auto"></img>

            <div className="w-auto h-auto p-3">
                <p className="text-sm text-red-600"> { message } </p>
                <p className="text-sm text-black"> { title } </p>
                <p className="text-sm text-gray-500"> { descContent } { desc }  </p>
                <p className="text-sm text-gray-500"> { colors } { colorsText } </p>
                <p className="text-sm text-black pt-3"> ${ price } </p>
            </div>
        </div>
    );
}

function AllItemsList( { listOfItems } ) {
    return (
        <div className="w-full h-auto grid grid-cols-2 gap-2 min-[960px]:grid-cols-3 min-[960px]:w-4/5">
            { listOfItems }
        </div>
    );
}

export default AllItemsList;