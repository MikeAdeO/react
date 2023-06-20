import React from 'react'
import "../../Styles/Products.css";
const Products = () => {

    const items = [
        {
            id: 1,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 2,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286120/81QVLzeVckL._AC_UF894_1000_QL80__vzavu2.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 3,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 4,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286120/81QVLzeVckL._AC_UF894_1000_QL80__vzavu2.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 5,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 6,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286120/81QVLzeVckL._AC_UF894_1000_QL80__vzavu2.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 7,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 1,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286120/81QVLzeVckL._AC_UF894_1000_QL80__vzavu2.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 8,
            title: "Samsung"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 9,
            title: "Infinix"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286120/81QVLzeVckL._AC_UF894_1000_QL80__vzavu2.jpg",
            description: "A techy device",
            price: 500,

        },
        {
            id: 10,
            title: "Iphone x"    ,
            image: "https://res.cloudinary.com/ogunlana/image/upload/v1687286092/iphone11-select-2019-family_ymsk6m.jpg",
            description: "A techy device",
            price: 500,

        },

    ]
  return (
    <div className='product__container'>
        {
            items.map(product => 
                <div className='product__sub__container' key={product.id}>
            <img src={product.image} alt=""  className='product__image'/>
            <div className='product__text__container'>
                <h4 className='product__text__title'>{product.title}</h4>
                <p className='product__text__description'>{product.description}</p>
                <small className='product__text__price'>${product.price}</small>
                <button className='product__text__chechout' type='button'>Add to Cart</button>
            </div>
        </div>
            )
        }
    </div>
  )
}

export default Products