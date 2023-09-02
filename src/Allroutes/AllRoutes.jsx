import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Rating from '../Components/rating'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Rating/>}/>
             
        </Routes>
     </div>
  )
}

export default AllRoutes
