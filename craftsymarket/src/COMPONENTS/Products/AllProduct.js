import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/Images/wool.jpg'
import './AllProduct.css'


const AllProduct = () => {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname:'product 1',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 2,
      productimage: img1,
      productname:'product 2',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 3,
      productimage: img1,
      productname:'product 3',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 4,
      productimage: img1,
      productname:'product 4',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 5,
      productimage: img1,
      productname:'product 5',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 6,
      productimage: img1,
      productname:'product 6',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 7,
      productimage: img1,
      productname:'product 7',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 8,
      productimage: img1,
      productname:'product 8',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },  {
      id: 9,
      productimage: img1,
      productname:'product 1',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 10,
      productimage: img1,
      productname:'product 2',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 11,
      productimage: img1,
      productname:'product 3',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
     {
      id: 412,
      productimage: img1,
      productname:'product 4',
      productprice: 100,
      counttype: '1 each',
      discountpercent: 12
     },
  ]
  return (
    <div className='allproducts'>
      <h1>All products</h1>
      <div className='products'>
        {
          products.map((item) => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct