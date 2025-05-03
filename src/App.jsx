import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headernav from './Components/Headernav'
import Kids from './Pages/Kids'
import Photography from './Pages/Photography'
import Packages from './Pages/Packages'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Wed from './Pages/Wed'
import Payment from './Pages/Payment'
import PaymentSuccess from './Pages/PaymentSuccess'
import Kidshow from './Pages/Kidshow'
import Bridal from './Pages/Bridal'
import Couple from './Pages/Couple'
import Groom from './Pages/Groom'
import Candid from './Pages/Candid'
import All from './Pages/All'
import WedShow from './Pages/WedShow'
import Register from './Pages/Register'
import Terms from './Components/Terms'
import Privacy from './Components/Privacy'
import About from './Components/About'
import WeddingFlim from './Pages/WeddingFlim'

function App() {
  return (
    <BrowserRouter>
    <Headernav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/wedding' element={<Wed/>}></Route>
    <Route path='/kids' element={<Kids/>}></Route>
    <Route path='/photography' element={<Photography/>}>

    <Route path='all' element={<All/>}></Route>
    <Route path='bridal' element={<Bridal/>}></Route>
    <Route path='couple' element={<Couple/>}></Route>
    <Route path='groom' element={<Groom/>}></Route>
    <Route path='candid' element={<Candid/>}></Route>
    </Route>
    <Route path='/packages' element={<Packages/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/success' element={<PaymentSuccess/>}></Route>
    <Route path='/kidshow/:id' element={<Kidshow/>}></Route>
    <Route path='/wedshow/:id' element={<WedShow/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/terms' element={<Terms/>}></Route>    
    <Route path='/privacy' element={<Privacy/>}></Route>    
    <Route path='/about' element={<About/>}></Route>    
    <Route path='/wedflim' element={<WeddingFlim/>}></Route>    
    </Routes>
    </BrowserRouter>
  )
}

export default App