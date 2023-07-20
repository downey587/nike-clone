import { React, useState } from "react";
import TextBlock from './textBlock';
import HeaderTitle from './headerTitle';
import CategoriesBlock from './categoriesBlock';
import PickUp from './pickUp';
import FiltersButton from "./filtersButton";
import FiltersBlock from "./filtersBlock";

function Hero() {
    const [filtersBlockStyle, setFiltersBlockStyle] = useState( "hidden" );

    const showFilters = () => setFiltersBlockStyle( "w-full h-full bg-white absolute px-5 top-0" );
    const hideFilters = () => setFiltersBlockStyle( "hidden" );

    return (
        <div>
            <TextBlock text={ "SHOP ALL NEW ARRIVALS" } />
            <HeaderTitle title={ "New Releases" } />
            <CategoriesBlock />
            <PickUp />
            <FiltersButton resultsNumber={ "2047" } onClick={ showFilters } />
            <FiltersBlock className={ filtersBlockStyle } onClick={ hideFilters } />
        </div>
    );
}

export default Hero;