import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Mobile_App from '../../Components/Mobile_App/Mobile_App'

const Home = () => {
  const [category ,setcategory] = useState("All")
  return (
    <>
    <Header/>
    <Menu category={category} setcategory={setcategory}/>
       <FoodDisplay category={category}/>
       <Mobile_App/>
    </>
  )
}

export default Home