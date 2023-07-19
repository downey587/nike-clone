import React from "react";

function HeaderTitle( { title } ) {
    return (
        <div className="w-full h-10 px-5 mt-5 mb-6 flex items-center">
            <h1 className="text-xl w-auto h-auto"> { title } </h1>
        </div>
    );
}

export default HeaderTitle;