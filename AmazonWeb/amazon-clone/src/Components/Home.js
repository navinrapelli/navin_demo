import React from 'react'
import img1 from './img1.jpg'
import product1 from './product1.jpg'
import product2 from './product2.jpeg'
import product3 from './product3.jpg'
import Product4 from './Product4.jpg'
import product5 from './product5.jpg'
import product6 from './product6.jpg'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <img className="home_image" src="
https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

        <div className="home_row" >
        <Product
        
          id="1234"
          title="Alexa:Its wirless AI which used for listing song according our commands"
          price={11.95}
          rating={5}
          image={product1}
             
        />
           <Product
        
        id="12345"
        title="The Blutooth hearphones"
        price={13.95}
        rating={4}
        image={product2}
           
      />
        </div>


        
        <div className="home_row" >
        <Product
        
          id="12346"
          title="The Mobile Phone"
          price={11.95}
          rating={3}
          image={product3}
             
        />
           <Product
        
        id="12347"
        title="The Laptop"
        price={19.95}
        rating={5}
        image={Product4}
           
      />

<Product
        
        id="12348"
        title="The Mouse"
        price={14.95}
        rating={5}
        image={product5}
           
      />
        </div>

        <div className="home_row" >
        <Product
        
          id="12349"
          title="The Crieket bat:this bat is made in india and this bat has lot of history its bat of procfession criketer"
          price={55.6}
          rating={3}
          image={product6}
             
        />
           
        </div>



    
        </div>
    )
}

export default Home
