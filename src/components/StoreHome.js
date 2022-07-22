import React from 'react';
import homeImage from "./../img/portland.jpg";
import CardFlip from "./CardFlip";
import Product from './Product';
import Store from './Store'
import './StoreHome.css';
import './Product.css';


function StoreHome() {
  return (
    <div className='store-home'>
      <div className='store-home-container'>
        
        <img className='home-image' src={homeImage}/>
        
        <div className='store-home-row1'>
        <Store
          id={1}
          name="Test Store"
          category="Plant Store"
          location="123 test AV."
          image='http://d1ih9tlfsfrtid.cloudfront.net/J2gmSW7eRA2ZX7SowN6X_9PJ-Storefront-04575dd6_lemon_one_10.jpg'
          
          /> 
        <Product id="2" title='cheese' price={200.00} image='https://media.wired.co.uk/photos/606db59587b15dc95f9cd468/16:9/w_1920,h_1080,c_limit/Cheese_01.jpg' rating={2} />
        

        </div>

        <div className='store-home-row'>
          <div className='card-banner'>
            <br/>
            <CardFlip />  
          </div>
        </div>

        <div className='store-home-row'>
          <Product id="2" title='Mulder Cardboard Cutout' price={44.99} image='https://img.fruugo.com/product/6/41/208578416_max.jpg' rating={5} />
        </div>

        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>

        <div className='store-home-row'>
          <Product id="3" title='rubber Dog Poop' price={12.99} image='https://cdn.shopify.com/s/files/1/0201/4206/3716/products/BMHK-PO-DogPoopSafe-HideAKey-Prod-1-large_900x.jpg?v=1557261255' rating={5} />
        </div>

        <div className='home-banner-top'></div>
        <div className='home-banner-bottom'></div>


        <div className='store-home-row'>
          <Product id="4" title='mechanical Bull' price={19.99} image='https://ven.magicjumprentals.com/images/resampled.php?source_im=L3Zhci93d3cvdmhvc3RzL3NpdGVzMy5yZW50YWxwYWQuY29tL2h0dHBkb2NzL2NsaWVudHMvNTQvcHJvZF9pbWFnZXMvMjAxODAzMjcxNTM4NTkuanBn&w=540,200_QL40_FMwebp_.jpg' rating={5} />
          <Product id="5" title='coffee mug' price={9.99} image='https://i3.cpcache.com/merchandise/0_750x750_Back_Color-White.jpg?Size=S&AttributeValue=NA&c=False&region={%22name%22:%22FrontCenter%22,%22width%22:5.44,%22height%22:2.76,%22alignment%22:%22MiddleRight%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:600,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:32424542,%22params%22:{}}}&cid=PUartJBjiF%2fyg4FdKqiggQ%3d%3d+%7c%7c+UosXOS38B%2bH6%2b9VLPVD3pQ%3d%3d&ProductNo=348867131' rating={5} />
          <Product id="6" title='Creed- Greatest Hits' price={6.99} image='https://i5.walmartimages.com/asr/876297eb-71c4-49a8-935c-2599401eacb5.15d5232df76a3229cdb2e7947631770c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' rating={5} />
          <Product id="7" title='Macho Man Randy Savage' price={999.99} image='https://www.biography.com/.image/t_share/MTc5Mzk0NDcxNjk0MTgxNzA5/macho01_ba.jpg' rating={5} />
        </div>

        
        <div className='home-banner-bottom'></div>

      </div>
    </div>
  )
}

export default StoreHome