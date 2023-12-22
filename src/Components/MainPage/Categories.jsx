import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Fashion",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Electronic",
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Cars",
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty",
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Pets",
        },
        {
            cateImg: "./images/category/cat9.png",
            cateName: "Baby Toys",
        },
        {
            cateImg: "./images/category/cat10.png",
            cateName: "Groceries",
        },
        {
            cateImg: "./images/category/cat11.png",
            cateName: "Books",
        },
    ];
    return (
        <>
            <div className="category">
                {data.map((cate , idx) => (
                    <div className='f_flex box' key={idx}>
                    <img src={cate.cateImg} alt='' />
                    <span>{cate.cateName}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories
