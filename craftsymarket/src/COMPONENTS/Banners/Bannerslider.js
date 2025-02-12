import React from 'react'
import Slider from'react-slick'
import './bannerslider.css'
const Bannerslider = () => {
    const data = [
        {
            id: 1,
            image: 'https://plus.unsplash.com/premium_photo-1661698822695-3ef59d5718dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: ' Handmade with Love',
            description:'Discover unique, handcrafted treasures that tell a story. Made for you, made to last.',
            button:'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://plus.unsplash.com/premium_photo-1681829337578-33212edc089b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: ' Artisan Gifts for Every Occasion ',
            description:' Personalized and thoughtful gifts to make every moment memorable. Shop now and gift from the heart.',
            button:'htttps://www.google.com'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: ' Bring Your Home to Life',
            description:' Warm, rustic decor to make your space truly yours. Handmade pieces that add soul to every room.',
            button:'htttps://www.google.com'
        }

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (

    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return(
                        <div className='imgcount' key={item.id}>
                            <img src={item.image} alt='noimg'/>
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>shop now!</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>

    </div>
  )
}

export default Bannerslider