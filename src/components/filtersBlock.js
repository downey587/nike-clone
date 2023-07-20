import React from "react";

function Label( { title, value } ) {
    return (
        <label className="flex items-center mb-5">
            <input type="radio" name="sortByRadio" value={ value } className="w-5 h-5 accent-black mr-2" />
            { title }
        </label>
    );
}

function FiltersBlock( { className, onClick } ) {
    const sortByList = [
        { "title": "Featured", "value": "featured" },
        { "title": "Newest", "value": "newest" },
        { "title": "Price: High-Low", "value": "high-low" },
        { "title": "Price: Low-High", "value": "low-high" }
    ];

    const sortByListLabels = sortByList.map( item => 
        <Label title={ item.title } value={ item.value } />    
    );

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

                { sortByListLabels }
            </section>

            <section className="w-full h-auto mt-8 pb-5 border-b">
                <p className="text-base font-semibold mb-7"> Gender </p>

                <label className="flex items-center mb-3">
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Men
                </label>

                <label className="flex items-center mb-3">
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Women
                </label>

                <label className="flex items-center mb-5">
                    <input type="checkbox" className="w-5 h-5 accent-black mr-2"></input>
                    Unisex
                </label>
            </section>
        </div>
    );
}

export default FiltersBlock;