import React from "react";

function TextBlock( { text } ) {
    return (
        <div className="w-full h-16 bg-zinc-100 flex justify-center items-center border-b-2">
            <h1 className="text-base"> { text } </h1>
        </div>
    );
}

export default TextBlock;