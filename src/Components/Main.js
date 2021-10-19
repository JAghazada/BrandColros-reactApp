import Search from "./Search";
import BrandsData from '../brands.json'
import Brands from "./Brands";
import { useContext, useState } from "react";
import { MainContext } from "../Context";
import LazyLoad from "react-lazyload";
import Downloads from "./Downloads";
import {List,AutoSizer} from 'react-virtualized'
function Main (){
    const {brands,selectedBrands} = useContext(MainContext)
    const rowRenderer=({key,index,style})=>{
        return(
            <Brands style={style} brand={brands[index]} key={key}></Brands>
        )
    }
return(
    <>
        <main className="content">
            <header className='header'>
            {selectedBrands.length!==0 && <Downloads/>}

                <Search/>

            </header>
            <div className="brands">
                            <List
                            width={1200}
                            height={8000}
                            rowCount={brands.length}
                            rowHeight={143}
                            rowRenderer={rowRenderer}
                            >
                            </List>
            </div>
        </main>
    </>
)
}
export default  Main