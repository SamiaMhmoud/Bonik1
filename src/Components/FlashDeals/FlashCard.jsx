import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddToCart from "../ProductComponents/AddToCart";

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

const FlashCard = ( { productItems, addToCart } ) =>
{
    const [ count, setCount ] = useState( 0 );
    const [ countHandler, setCountHandler ] = useState( 0 );
    const increment = ( id ) =>
    {
        setCount( count + 1 );
        setCountHandler( id );
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            <Slider { ...settings }>
                { productItems.map( ( pro, idx ) => (
                    <div className="card" key={ pro.id }>
                        <div className="product pro-height shadow">
                            <div className="image">
                                <span className="discount">{ pro.discount }%Off</span>
                                <img src={ pro.cover } alt="" />
                                <div className="product-like">
                                    <label>{ countHandler === idx ? count : 0 }</label> <br />
                                    <i
                                        className={ `fa-regular fa-heart` }
                                        onClick={ () => increment( idx ) }
                                    ></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{ pro.name }</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="d_flex">
                                    <div className="price">
                                        <h4>${ pro.price }.00</h4>
                                    </div>
                                    <AddToCart
                                        addToCart={ () => addToCart( pro ) }
                                        className={ "add-pro" }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) ) }
            </Slider>
        </>
    );
};

export default FlashCard;
