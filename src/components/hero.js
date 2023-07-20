import { React, useState } from "react";
import TextBlock from './textBlock';
import HeaderTitle from './headerTitle';
import CategoriesBlock from './categoriesBlock';
import PickUp from './pickUp';
import FiltersButton from "./filtersButton";
import FiltersBlock from "./filtersBlock";
import AllItemsList from './itemsList';

function Hero() {
    const [filtersBlockStyle, setFiltersBlockStyle] = useState( "hidden min-[960px]:block min-[960px]:w-auto" );

    const showFilters = () => setFiltersBlockStyle( "w-full h-full bg-white absolute px-5 top-0" );
    const hideFilters = () => setFiltersBlockStyle( "hidden" );

    return (
        <div>
            <TextBlock text={ "SHOP ALL NEW ARRIVALS" } />
            <div className="min-[960px]:flex items-center min-[960px]:px-7">
                <HeaderTitle title={ "New Releases" } />
            </div>

            <div className="min-[960px]:flex min-[960px]:px-12 min-[960px]:space-x-16">
                <div className="min-[960px]:w-48">
                    <div className="min-[960px]:w-auto min-[960px]:h-auto min-[960px]:flex min-[960px]:flex-col-reverse">
                        <CategoriesBlock />
                        <PickUp />
                        <FiltersButton resultsNumber={ "2227" } onClick={ showFilters } />
                    </div>
                    
                    <div className="min-[960px]:w-full min-[960px]:flex">
                        <FiltersBlock className={ filtersBlockStyle } onClick={ hideFilters } />
                    </div>
                </div>

                <AllItemsList />
            </div>
        </div>
    );
}

export default Hero;