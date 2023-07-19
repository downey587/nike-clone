import React from "react";
import button from "../assets/pick-up-button.svg";

function PickUp() {
    return (
        <div className="w-full h-20 border-y-2 mt-4 flex px-5 justify-between items-center">
            <h1 className="text-base"> Pick Up Today </h1>

            <img src={ button } alt="button." className="w-auto h-10"></img>
        </div>
    );
}

export default PickUp;