import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from './Ddata'

const Dcard = () =>
{
    const SampleNextArrow = ( props ) =>
{
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={ onClick }>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    );
    };
    const SamplePrevArrow = ( props ) =>
    {
        const { onClick } = props;
        return (
            <div className="control-btn" onClick={ onClick }>
                <button className="prev">
                    <i className="fa fa-long-arrow-alt-left"></i>
                </button>
            </div>
        );
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    };
    return (
        <>
        <Slider {...settings}>
                { Ddata.map( ( value, idx ) => (
                <div key={idx}>
                <div className="box product shadow" >
                    <div className="image">
                        <img src={value.cover} alt="" width={'100%'}/>
                    </div>
                    <div className="details">
                        <h4>{ value.name }</h4>
                        <span>${ value.price }.00</span>
                    </div>
                </div>
                </div>
            ))}
        </Slider>
        </>
    )
}

export default Dcard
