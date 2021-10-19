import { useContext } from "react";
import {GrSearch} from "react-icons/gr";
import { MainContext } from "../Context";

function Search(props){
    const { setSearch,search} = useContext(MainContext)
    
    return(
        <div className="search">
            <div className="icon">
                <GrSearch/>
            </div>
            <input type="text" onChange={(e)=>{
                setSearch(e.target.value)
            }} placeholder="Serch Brands"/>
        </div>
    )
}
export  default  Search