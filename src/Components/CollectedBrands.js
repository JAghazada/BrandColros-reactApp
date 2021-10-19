import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MainContext } from '../Context'
import Brands from './Brands'
import { GrBackTen } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Downloads from './Downloads'
import { useHistory } from 'react-router'
function CollectedBrands() {
    const history = useHistory()
    const {slugs} = useParams()
    var link = 0
    const {brands,selectedBrands,setSelectedBrands} = useContext(MainContext)
    useEffect(()=>{
        return setSelectedBrands(slugs.split('--'))
    })
    return (
        <div style={{
            width:'100%',
            height:'100%'
        }}>
            <main className="content">
            <header className='header' style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                {selectedBrands.length!==0 && <Downloads  link={link}/>}
                <Link to="/"><button className='allBrnds' onClick={()=>{
                    setSelectedBrands([])
                    history.push('/')
                }}>All Brands</button></Link>
            </header>
            <div className="brands" style={{
                width:'100%'
            }}>
                {
                    selectedBrands.map(slug=>{
                        let brand = brands.find(brand=>brand.slug===slug)
                        return(
                            <Brands brand={brand}/>
                        )
                    })
                }
            </div>
        </main>
        </div>
    )
}

export default CollectedBrands
