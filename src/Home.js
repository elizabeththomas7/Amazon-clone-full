import React,{useState} from 'react'
import './Home.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {HomepageAds} from './data/HomepageAds.js';
import {ProductCards} from './data/ProductCards.js';
import {Link} from 'react-router-dom';

const responsive={
  superLargeDesktop:{
    breakpoint:{max:4000,min:3000},
    items:5
  },
  desktop:{
    breakpoint:{max:3000,min:1024},
    items:6
  },
  tablet:{
    breakpoint:{max:1024,min:464},
    items:2
  },
  mobile:{
    breakpoint:{max:464,min:0},
    items:1
  }
}

function Home() {
const [Ads] = useState(HomepageAds);
const [ItemCards] = useState(ProductCards);

return (
<div className="home">
<div className="homepage-ads">
            <Carousel 
            showThumbs={false} 
            showIndicators={false} 
            showStatus={false}
            >
              {Ads.map(Ad =>(
                <div>
                    <img src={Ad.src} />
                </div>
              ))
}
            </Carousel>
            </div>  

<div className="homepage-products-cards">
{ItemCards.map(ItemCard =>(
                <div className="homepage-products-cards-details">
                <Card >
                  <CardActionArea>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {ItemCard.cardName}
                      </Typography>
                    </CardContent>
                    <div className="product-card-icons">
                      {ItemCard.items.map(item=>(
                        <div>
                          <Link to="/products">
                    <img
                      height="140"
                      width="140"
                      src={item.src}
                    />
                    </Link>
                   <Typography  variant="body2" gutterBottom >
                     {item.itemName}
                      </Typography>
                      </div>
                      ))}
                      </div>
                  </CardActionArea>
                </Card>
                </div>
              ))
}
</div>

<div className="homepage-bestsellers">
  <Card>
  <Typography gutterBottom variant="h5" component="h2">
          Bestsellers in Books
          </Typography>
<MultiCarousel responsive={responsive}>
<div>
  
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img

          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
<div>
<img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        />
</div>
</MultiCarousel>
</Card>
</div>

            
</div>
    )
}

export default Home;
