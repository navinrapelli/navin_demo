
import './App.css';
import axios from 'axios';
import Navbar12 from './Components/Navbar12'
import NewsContent from './Components/NewsContent/NewsContent'
import config from './Config/config'
import {useState,useEffect} from 'react'
function App() {

        const[category,setCategory]=useState("general");
        const [newsArray,setNewsArray] = useState([]);
        const [newsReuslts,setnewsReuslts] = useState()
        const [loadmore, setLoadmore] = useState(20)

        const newsapi = async()=>{

          try {

              const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${config}&category=${category}&pageSize=${loadmore}`);
            setNewsArray(news.data.articles);
            console.log(news.data.articles)
            setnewsReuslts(news.data.totalResults);
            console.log(news.data.totalResults)
          } catch (error) {
             console.log(error)
          }
        }


        useEffect(() => {
          
          newsapi();
          // eslint-disable-next-line
        }, [newsReuslts,category,loadmore])

  return (
    <div className="App">
     <Navbar12 setCategory={setCategory}/>
     <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={newsArray} newsReuslts={newsReuslts}/>
    </div>
  );
}

export default App;
