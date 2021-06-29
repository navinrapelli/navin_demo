import React from 'react'
import './NewsContent/NewsCart.css'
import blank1 from './NewsContent/blank1.jpg'

const  NewsCart=({item}) =>{

    const fulldate=new Date(item.publishedAt);
    var date= fulldate.toString().split("");



    return (
        <div className="newsCard">
        {/* // eslint-disable-next-line  */}
        <a  href="https://assets.mspimages.in"><img style={{width:500}}  alt={item.titile} src={item.urlToImage?item.urlToImage:blank1}></img></a>
        <div className="newstext">
          <div>
              <span className="text">
                  <b>Title : </b>
                  {item.title}</span>
              <span className="muted">
                  : by {item.author ?item.author:"unkown"}
              </span>
          </div>
          <div className="dis">
              <b>Discription : </b>
               {item.description}
          </div>
          <div className="readmore">
              Read more about this article
              
        {/* 
          // eslint-disable-next-line */}
          <a href={item.url} target="_blank"> 

        
                      <b>{item.source.name}</b>
                  </a>
                  
          
          </div>
        
          <div className="date">
              {date}
          </div>
        </div>
        </div>
    )
}

export default NewsCart
