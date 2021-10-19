import logo from './logo.svg';
import './App.css';
import { MainContext } from './Context';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main'
import { useEffect, useState } from 'react';
import BrandsData from './brands.json'
import Copied from './Components/Copied';
import Downloads from './Components/Downloads';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import CollectedBrands from './Components/CollectedBrands';
function App() {
  const ourBrands = []
    Object.keys(BrandsData).map(key=>{
        ourBrands.push(BrandsData[key])
    })
    const [brands,setBrands] = useState(ourBrands)
    const [ selectedBrands,setSelectedBrands] = useState([])
    const [copied ,setCopied] = useState(false)
    const [search ,setSearch] = useState('')
    useEffect(()=>{
      if(copied){
        setTimeout(()=>{
          setCopied(false)
        },500)
      }
    },[copied])
    useEffect(()=>{
      setBrands(ourBrands.filter(brand=>{return brand.title.toLowerCase().includes(search)}))
    },[search])
    const data = {
      brands,
      setBrands,
      selectedBrands,
      setSelectedBrands,
      setCopied,
      setSearch,
      search
    }
    
  return (
    <MainContext.Provider value={data}>
     
    <BrowserRouter>
      <Switch>
          <Route  path='/' exact>
          { copied && <Copied color={copied}/>}
        <Sidebar/>
                <Main/>
          </Route>
            <Route  path='/collectedbrands/:slugs'>
              <CollectedBrands/>
            </Route>
      </Switch>
     </BrowserRouter>
    </MainContext.Provider>
   
  );
}

export default App;
