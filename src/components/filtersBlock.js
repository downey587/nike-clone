import React from "react";

function FiltersBlock( { className, onClick, filtersFunctions } ) {
    return (
        <div className={ className }>
            <div className="absolute min-[960px]:hidden">
                <h1 className="text-base mt-9 flex-auto"> Filter </h1>
            </div>

            <button onClick={ onClick } className="w-8 h-8 bg-slate-950 rounded-full text-white font-semibold text-lg sticky top-5 float-right min-[960px]:hidden">
                ✖ 
            </button>

            <section className="w-full h-auto mt-24 pb-5 border-b min-[960px]:mt-6">
                <p className="text-base font-semibold mb-7"> Sort By </p>

                <label className="flex items-center mb-5">
                    <input type="radio" name="sortByRadio" value="featured" className="w-5 h-5 accent-black mr-2" />
                    Featured
                </label>

                <label className="flex items-center mb-5"  onClick={ filtersFunctions[0] }>
                    <input type="radio" name="sortByRadio" value="newest" className="w-5 h-5 accent-black mr-2" />
                    Newest
                </label>

                <label className="flex items-center mb-5" onClick={ filtersFunctions[1] }>
                    <input type="radio" name="sortByRadio" value="high-low" className="w-5 h-5 accent-black mr-2" />
                    Price: High-Low
                </label>

                <label className="flex items-center mb-5" onClick={ filtersFunctions[2] }>
                    <input type="radio" name="sortByRadio" value="low-high" className="w-5 h-5 accent-black mr-2" />
                    Price: Low-High
                </label>
            </section>

            <section className="w-full h-auto mt-8 pb-5 border-b">
                <p className="text-base font-semibold mb-7"> Gender </p>

                <label className="flex items-center mb-3" onClick={ filtersFunctions[3] }>
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Men
                </label>

                <label className="flex items-center mb-3" onClick={ filtersFunctions[4] }>
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Women
                </label>

                <label className="flex items-center mb-3" onClick={ filtersFunctions[5] }>
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Unisex
                </label>

                <label className="flex items-center mb-5" onClick={ filtersFunctions[6] }>
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Kids
                </label>
            </section>
        </div>
    );
}

export default FiltersBlock;