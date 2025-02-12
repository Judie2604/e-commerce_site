import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Bannerslider from '../../COMPONENTS/Banners/Bannerslider'
import HomeCategory from '../../COMPONENTS/Category/HomeCategory'
import Product_Sidebar from '../../COMPONENTS/Products/Product_Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Bannerslider />
        <HomeCategory />
        <Product_Sidebar />
       
        Home</div>
  )
}

export default Home