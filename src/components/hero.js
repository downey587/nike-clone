import { React } from "react";
import TextBlock from './textBlock';
import HeaderTitle from './headerTitle';
import CategoriesBlock from './categoriesBlock';
import PickUp from './pickUp';
import FiltersButton from "./filtersButton";

function Hero() {
    return (
        <div>
            <TextBlock text={ "SHOP ALL NEW ARRIVALS" } />
            <HeaderTitle title={ "New Releases" } />
            <CategoriesBlock />
            <PickUp />
            <FiltersButton resultsNumber={ "2047" } />
        </div>
    );
}

export default Hero;