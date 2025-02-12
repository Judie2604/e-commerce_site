import React from 'react'
import img1 from '../../ASSETS/decour.jpg';
import img2 from '../../ASSETS/lamps.jpg';
import img3 from '../../ASSETS/wood.jpg';
import img4 from '../../ASSETS/wool.jpg';
import './CategorySidebar.css'


const CategorySidebar = () => {
    const data = [
      {
        id: 1,
        categoryimage: img1,
        categoryname: 'Category 1'
      },
      {
        id: 2,
        categoryimage: img2,
        categoryname: 'Category 2'
      },
      {
        id: 3,
        categoryimage: img3,
        categoryname: 'Category 3'
      },
      {
        id: 4,
        categoryimage: img4,
        categoryname: 'Category 4'
      },
      {
        id: 5,
        categoryimage: img1,
        categoryname: 'Category 1'
      },
      {
        id: 6,
        categoryimage: img2,
        categoryname: 'Category 2'
      },
      {
        id: 7,
        categoryimage: img3,
        categoryname: 'Category 3'
      },
      {
        id: 8,
        categoryimage: img4,
        categoryname: 'Category 4'
      }
    ];

    return (
        <div className="category-sidebar">
            {
              data.map((item) => {
                return(
                  <div className='category'>
                    <img src={item.categoryimage}
                    alt='categoryimage'/>
                    <p>{item.categoryname}</p>
                  </div>
                )
              })
            }
        </div>
    );
}

export default CategorySidebar;
