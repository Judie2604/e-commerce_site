import React from 'react'
import './Homecategory.css'
import decour from '../../ASSETS/Images/decour.jpg'
import lamps from '../../ASSETS/Images/lamps.jpg'
import wood from '../../ASSETS/Images/wood.jpg'
import wool from '../../ASSETS/Images/wool.jpg'
const HomeCategory = () => {
  return (
    <div className='homecategories'>

        <div className='container'>
          <img src={decour} alt="img1" />
          <div className='content'>
            <h1>Shop Our Favorites</h1>
            <p>From cozy home decor to timeless accessories, discover the best of Craftsy Market loved by our customers.</p>
          </div>
        </div>

        <div className='container'>
        <img src={lamps} alt="img2" />
        <div className='content'>
          <h1>Personalized Just for You</h1>
          <p> Add a personal touch with custom orders designed to fit your style and occasion. Unique gifts made to impress.</p>
        </div>
        </div>

        <div className='container'>
        <img src={wood} alt="img3" />
        <div className='content'>
          <h1> Meet the Makers</h1>
          <p>et to know the passionate artisans behind our handcrafted collections. Every product has a story waiting to be told.</p>
        </div>
        </div>

        <div className='container'>
        <img src={wool} alt="img4" />
        <div className='content'>
          <h1> Eco-Friendly Finds</h1>
          <p> Shop sustainable, eco-conscious products that make a difference. Beautiful craftsmanship with the planet in mind.</p>
        </div>
        </div>
        
    </div>
  )
}

export default HomeCategory