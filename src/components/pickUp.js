import React from "react";
import button from "../assets/pick-up-button.svg";

function PickUp() {
    return (
        <div className="w-full h-20 border-y-2 mt-4 flex px-5 justify-between items-center  min-[960px]:h-20 min-[960px]:justify-start min-[960px]:border-b min-[960px]:border-y-0 min-[960px]:mt-0 min-[960px]:ml-0 min-[960px]:mb-4 min-[960px]:px-0 min-[960px]:space-x-3">
            <h1 className="text-base"> Pick Up Today </h1>

            <img src={ button } alt="button." className="w-auto h-10 min-[960px]:w-10"></img>
        </div>
    );
}

export default PickUp;