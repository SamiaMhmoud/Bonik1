import React from 'react'
import Tdata from './Tdata'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopCart = () =>
{

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <Slider { ...settings }>
                { Tdata.map( ( value, idx ) => (
                    <div key={ idx }>
                        <div className="box product">
                            <div className="name-top d_flex">
                                <span className='tleft'>{ value.para }</span>
                                <span className='tright'>{ value.desc }</span>
                            </div>
                            <div className="image">
                                <img src={ value.cover } alt="" />
                            </div>
                        </div>
                    </div>
                ) ) }
            </Slider>
        </>
    )
}

export default TopCart
