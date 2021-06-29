import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {

    const[{basket},dispath]=useStateValue();

    const addtobasket=()=>{

        dispath({

            type:"ADD_TO_BASKET",
            item:{

                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        });


    };
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
             <small>$</small>
             <strong>{price}</strong>
            </p>
           <div className="product_rating">
              {
                  Array(rating)
                  .fill()
                  .map((_)=>(
                    
                    <StarIcon></StarIcon>
                  ))
              }
           </div>
            </div>
          
            <img src={image} alt=""></img>
            <button onClick={addtobasket}>Add to basket</button>

        </div>
    )
}

export default Product
