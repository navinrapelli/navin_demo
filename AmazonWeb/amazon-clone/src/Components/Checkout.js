import React from 'react'
import { useStateValue } from './StateProvider'
import add1 from './add1.jpg'
import './Checkout.css'

import CheckoutProduct from './CheckoutProduct';


function Checkout() {

   

    const [{basket}]=useStateValue();
    return (
        <div className="checkout">

            <div className="checkout_left">
            <img className="one" src={add1}/>

            {basket?.length===0?(
                   <div>
                       <h2>Your Basket is Empty</h2>
                       <p>
                           Your basket is empty so u need to Click on button "Add to Basket " next to ur item
                       </p>
                   </div>
               
            ):(

                <div>
                       <h2 className="chekout_titile">Your Shopping Basket</h2>
                       {basket.map(item=>(

                           <CheckoutProduct
                           
                               id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}

                           
                           
                           
                           
                           />


                       ))}
                   </div>

            )}

               </div>
             
        </div>
    )
}

export default Checkout
