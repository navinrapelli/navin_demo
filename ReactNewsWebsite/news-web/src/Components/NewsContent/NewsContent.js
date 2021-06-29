import React from 'react'
import NewsCart from '../NewsCart'
import {Container} from '@material-ui/core'


const NewsContent=({newsArray,newsReuslts,loadmore,setLoadmore})=>{

    

    return (
        <Container maxWidth="md" >
       <div>
           {newsArray.map(item=>(

               <NewsCart item={item} key={item.title}/>
           ))
           
           }
           </div>
           {loadmore <= newsReuslts &&(
               <>
        
           <button className="laodmore" onClick={()=>setLoadmore(loadmore+20)}>load more</button>
           </>
           )} 
           </Container>  
       
    )
};


export default NewsContent
