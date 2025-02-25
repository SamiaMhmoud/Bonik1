import React from "react"


const Catg = ({showSelectedCategory}) =>
{
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]

  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        <div className="cate-box">
          {data.map((value, index) => {
            return (
              <div className='box f_flex' key={index} onClick={()=>showSelectedCategory(value.cateName)}>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </div>
            )
          })}
          <div className='brands-btn box'>
            <button onClick={()=>showSelectedCategory("all")}>View All Brands</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catg
