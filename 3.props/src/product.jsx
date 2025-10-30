import React from 'react'

function Product(props) {// function Product({productName,price}) {
                        // bu şekildede direk destructuring alabiliriz
    console.log(props)
    const {productName,price} = props;//destructuring yöntemi ile obje aldık
    return (
        <div>
            <div>Ürün Bilgileri</div>

            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {props.price}</div>
            </div>

        </div> 
    )
}

export default Product