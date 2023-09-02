
import React, {  useEffect, useState } from 'react'
import axios from "axios"
import NavbarPage from './navbar/NavbarPage'
import Products from './components/Products'
import DropDown from './components/DropDown'
import UseContext from './components/UseContext'
import BasketShow from './sepetim/BasketShow'



const App = () => {
  const [ıtem, setItem] = useState([])
  const[search, setSearch] = useState("")
  const [show, setShow] = useState(false)

  
  
  const showClick=()=>{
    setShow(true)
  }
  const notShowClick=(e)=>{
    e.preventDefault()
    setShow(false)
  }
  
  


  useEffect(() => {
    axios.get('http://localhost:3000/Item').then(i => setItem(i.data))
  })
  const InputSearch=(event)=>{
   setSearch(event.target.value)
   
  }

  
  
  
  return (
      <UseContext>
          <div className="container">
            
            <NavbarPage showClick={showClick} InputSearch={InputSearch} />
              {show && <BasketShow  ıtem={ıtem} notShowClick={notShowClick} /> }
            
            <DropDown ıtem={ıtem}  />
                <div className="row">

          
            
  
          
            {
              ıtem.filter((i) => {
                return search.toLocaleLowerCase() === "" ? i : i.name.toLocaleLowerCase().includes(search)
              }).map((i, index) => 
              <div className='col-md-3'>
                    <Products  ıtem={i} key={index}  />
              </div>
              
              )
            }

            </div>
        </div> 

      </UseContext>
        
    
  )
}

export default App
