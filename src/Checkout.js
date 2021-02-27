import React, { useState } from 'react'
import {ProductList} from './data/ProductList';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Checkout.css';
import {useStateValue} from './Provider';



function Checkout() {
    const [{}, dispatch] = useStateValue();
    const[{cart}]=useStateValue();

    const removeFromCart=(id)=>{
        dispatch({
          type:"Remove_From_Cart",
          id
        })
      }
    return (
        <div className="checkout">
             <div className="checkout-component">
                 
             <Card >
                    <CardActionArea>
                    <div className="checkout-cards-details">
                        <div className="shoppingcart">
                        Shopping Cart
                        </div>
                        <div className="price">
                        Price
                        </div>
                        </div>
                    </CardActionArea>
                  </Card>
                  
{cart.map(product =>(
                
                <Card >
                    
                  <CardActionArea>
                  <div key={product.id} className="checkout-cards-details">
                  <img
                      height="140"
                      width="140"
                      src={product.src}
                    />
                      <div className="checkout-itemName">
                      {product.itemName}
                      </div>
                    
                    <div className='checkout-price'>Rs.{product.price}</div>
                    
                    </div>
                    <button className='btn-removeFromCart' onClick={()=>removeFromCart(product.id)}>Remove from Cart</button>
                  </CardActionArea>
                
                </Card>
              ))
}
</div>
        </div>
    )
}

export default Checkout
