import React, { useState } from 'react'
import {ProductList} from './data/ProductList';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ProductList.css';
import {useStateValue} from './Provider';


function Products() {

const [{cart}, dispatch] = useStateValue();

const addToCart=(product)=>{
  dispatch({
    type:"Add_To_Cart",
    product
  })
}

    return (
        <div>
            <div className="homepage-products-cards">
{ProductList.map(product =>(
                <div key={product.id} className="products-cards-details">
                <Card >
                  <CardActionArea>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {product.itemName}
                      </Typography>
                    </CardContent>
                    <img
                      height="140"
                      width="140"
                      src={product.src}
                    />
                    <div className='product-price'>Rs.{product.price}</div>
                    <button className='btn-addtoCart' onClick={()=>addToCart(product)}>Add to Cart</button>
                  
                  </CardActionArea>
                </Card>
                </div>
              ))
}
</div>
        </div>
    )
}

export default Products
