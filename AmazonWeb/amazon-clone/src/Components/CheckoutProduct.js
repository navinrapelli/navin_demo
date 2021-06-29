import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {

    
    const[{basket},dispath]=useStateValue();
  
    const removefrombaskt=()=>{


        
        dispath({

            type:"REMOVE_FROM_BASKET",
             id:id,
             
        });
   
        console.log("anna")

    };
    return (
        <div className="chekout_product">
            <img className="chekout_product_img" src={image} alt=""></img>

            <div className="checkout_product_info">
            
                        <p className="checkout_product_title">{title}</p>
                        <p className="checkout_product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                        </p>
                        
                        <div className="chekout_product_rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_)=>(
                                
                                <StarIcon></StarIcon>
                            ))
                        }
                         </div>
                        
                        <button onClick={removefrombaskt}>Remove from basket</button>

            </div>

            
        </div>
    )
}

export default CheckoutProduct
