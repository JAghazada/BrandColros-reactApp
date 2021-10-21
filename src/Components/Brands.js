import React, { useContext } from 'react'
import ClipboardButton from 'react-clipboard.js'
import { MainContext } from '../Context'
import getContrastYIQ from '../helpers'
function Brands({brand,style}) {
    const {selectedBrands,setSelectedBrands,setCopied} = useContext(MainContext)
   const selectBrand = ()=>{
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug=>slug !== brand.slug))
        }else {

            setSelectedBrands([...selectedBrands,brand.slug])
        }
   }
    return (
        <div style={style} className={` brand ${selectedBrands.includes(brand.slug) ? 'active' : ''}`}>
            <h5>{brand.title}</h5>
            <div onClick={selectBrand} className="brand-colors">
                {brand.colors.map(colors=>{
                    return (
                    <ClipboardButton key={colors} data-clipboard-text={colors} onSuccess={()=>{
                        setCopied(colors)
                    }} component="span"  style={{'--bgColor':`#${colors}`,margin:4,'--textColor':`${getContrastYIQ(colors)}`}}>
                            <span>{colors}</span>
                    </ClipboardButton>)
                })}
            </div>
        </div>
    )
}

export default Brands



































