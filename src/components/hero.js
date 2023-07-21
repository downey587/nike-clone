import { React, useState } from "react";
import TextBlock from './textBlock';
import HeaderTitle from './headerTitle';
import CategoriesBlock from './categoriesBlock';
import PickUp from './pickUp';
import FiltersButton from "./filtersButton";
import FiltersBlock from "./filtersBlock";
import AllItemsList from './itemsList';
import itemsList from "../data/itemsList.json";
import { ItemBlock } from "./itemsList";
import itemImg from "../assets/itemImg.png";

function Hero() {
    const [filtersBlockStyle, setFiltersBlockStyle] = useState( "hidden min-[960px]:block min-[960px]:w-auto" );

    const showFilters = () => setFiltersBlockStyle( "w-full h-full bg-white absolute px-5 top-0" );
    const hideFilters = () => setFiltersBlockStyle( "hidden" );

    const [allItemsListContent, setAllItemsListContent] = useState(
        itemsList.itemsList.map( item => 
            <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />     
        )
    );

    const filtersFunctions = [
        () => {
            const sortByNewest = ( item1, item2 ) => {
                return item2.new - item1.new;
            }

            const sortedList = itemsList.itemsList.sort( sortByNewest )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortByPrice = ( item1, item2 ) => {
                return item2.price - item1.price;
            }

            const sortedList = itemsList.itemsList.sort( sortByPrice )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortByPrice = ( item1, item2 ) => {
                return item1.price - item2.price;
            }

            const sortedList = itemsList.itemsList.sort( sortByPrice )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortedList = itemsList.itemsList.filter( item => 
                item.gender === 'men'    
            )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortedList = itemsList.itemsList.filter( item => 
                item.gender === 'women'    
            )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortedList = itemsList.itemsList.filter( item => 
                item.gender === 'unisex'    
            )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        },

        () => {
            const sortedList = itemsList.itemsList.filter( item => 
                item.gender === 'kids'    
            )
            setAllItemsListContent( 
                sortedList.map( item => 
                    <ItemBlock src={ itemImg } alt={ "item img." } message={ item.message } title={ item.title } desc={ item.desc } colors={ item.colors } price={ item.price } gender={ item.gender } />
                )
            );
        }
    ];

    return (
        <div>
            <TextBlock text={ "SHOP ALL NEW ARRIVALS" } />
            
            <div className="min-[960px]:flex items-center min-[960px]:px-7">
                <HeaderTitle title={ "New Releases" } />
            </div>

            <div className="min-[960px]:flex min-[960px]:px-12 min-[960px]:space-x-16">
                <div className="min-[960px]:w-48 min-[960px]:h-96 min-[960px]:sticky min-[960px]:top-0 min-[960px]:overflow-y-scroll">
                    <div className="min-[960px]:w-auto min-[960px]:h-auto min-[960px]:flex min-[960px]:flex-col-reverse">
                        <CategoriesBlock />
                        <PickUp />
                        <FiltersButton resultsNumber={ "2227" } onClick={ showFilters } />
                    </div>
                    
                    <div className="min-[960px]:w-full min-[960px]:flex">
                        <FiltersBlock className={ filtersBlockStyle } onClick={ hideFilters } filtersFunctions={ filtersFunctions } />
                    </div>
                </div>

                <AllItemsList listOfItems={ allItemsListContent } />
            </div>
        </div>
    );
}

export default Hero;