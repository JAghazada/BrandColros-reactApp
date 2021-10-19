import React, { useContext, useEffect } from 'react'
import { MainContext } from '../Context'
import { GrClose,GrLink,GrDownload } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Downloads({link}) {
    const {setSelectedBrands,brands,selectedBrands} = useContext(MainContext)
    const clear=()=>{
        setSelectedBrands([])
    }
    const [ downloadLink,setLink] = useState('')
    const [styleType,setStyleType] = useState('css')
    
    useEffect(()=>{
        if(selectedBrands.length>0){
            let output = ''

            if(styleType === 'css'){
                selectedBrands.map(slug=>{
                let brand = brands.find(item=>item.slug === slug)
                brand.colors.map((color,key)=>{
                    output+=`--${slug}-${key}:#${color};\n`
                    })
                })
            }else if(styleType === 'less'){
                
                selectedBrands.map(slug=>{
                    let brand = brands.find(item=>item.slug === slug)
                    brand.colors.map((color,key)=>{
                        output+=`@${slug}-${key}:#${color};\n`
                    })
                })
            }
            else if(styleType==='scss'){
                    
            selectedBrands.map(slug=>{
                let brand = brands.find(item=>item.slug === slug)
                brand.colors.map((color,key)=>{
                    output+=`\$${slug}-${key}:#${color};\n`
                })
            })
            }
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setLink(url)
            return ()=>{
                URL.revokeObjectURL(url)
                setLink('')
             }
        }
        

    },[selectedBrands,styleType])
    return (
        <div className='download' >
            <span onClick={clear}  className='bdl'>{selectedBrands.length} brands collected <GrClose onClick={clear}/> </span>
            <a download={`style.${styleType}`} href={downloadLink} className='bdl'><GrDownload/></a>
            <select onChange={(e)=>{
                setStyleType(e.target.value)
            }}>
                <option value='css'>Css</option>
                <option value='less'>Less</option>
                <option value='scss'>Scss</option>
            </select>
            {link!==0 ?
            <Link to={`collectedbrands/${selectedBrands.join('--')}`}><span className='bdl'><GrLink/></span></Link>
            
            : "" }
        </div>
    )
}

export default Downloads
