// ---------------------------------------------------- Class Based -----------------------------------------------------

// import PropTypes from 'prop-types'

/*

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  // default proptypes 

   static defaultProps = {
      pageSize : 8,
      country : 'in',
      category : 'general',         // got that from newsApi website
   }

   static propTypes = {
      pageSize : PropTypes.number,
      country : PropTypes.string,
      category : PropTypes.string,
   }

   TitleCase = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  
// order of running : Constructuer => render => componentDidMount
  
    constructor(props) {
        super(props);       // It is compulsary to write super() otherwise it will give error
        console.log("Hello i am a constructer from news file")
        this.state = {
            articles : [],
            loading : false,
            page:1
        }
        document.title = `${this.TitleCase(props.category)} - Batmya`;
      }

    async updateNews() {
      props.setProgress(10);  // setting progress to 10 so that the loader will be visible 
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      props.setProgress(40);
      let parseData = await data.json();
      props.setProgress(70);
      // console.log(parseData);
      this.setState({articles : parseData.articles  ,  
        totalResults : parseData.totalResults , 
        loading:false })
        props.setProgress(100);
    }

    async componentDidMount() {        // will run after render function
        // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5ffead6b9af5449fab032fb7721e62e2&page=1&pageSize=${props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);
        // this.setState({articles : parseData.articles  ,  
        //   totalResults : parseData.totalResults , 
        //   loading:false })

        this.updateNews();
    }

    bringPrevPage = async () => {
      // console.log("Next");
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5ffead6b9af5449fab032fb7721e62e2&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
      // this.setState({loading:true});        // articles load (Fetch) hottanna loading true asel 
      // let data = await fetch(url);
      // let parseData = await data.json();
      // this.setState( {
      //   page : this.state.page - 1,        // decreasing page number when we click Previous 
      //   articles : parseData.articles,
      //   loading:false                      // articles load (Fetch) jhalyanantar loading false asel
      // } )

      // Refactoring : Reuse code

      this.setState({page:this.state.page - 1});
      this.updateNews();

  }

    bringNextPage = async () => {
        // console.log("Next");
        // if(! (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) ){
        
        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5ffead6b9af5449fab032fb7721e62e2&page=${this.state.page + 1  }&pageSize=${props.pageSize}`;
        //     this.setState({loading:true});      // articles load (Fetch) hottanna loading true asel 
        //     let data = await fetch(url);
        //     let parseData = await data.json();
        //     this.setState( {
        //       page : this.state.page + 1,        // increasing page number when we click next 
        //       articles : parseData.articles,
        //       loading:false                    // articles load (Fetch) jhalyanantar loading false asel 
        //     } )
        // }

        // Refactoring : Reuse code

      this.setState({page:this.state.page + 1});
      this.updateNews();

    }

  render() {
    return (
      <div className='container my-4'>
        
        <h1 className='my-4 text-primary text-center'><strong>Top {this.TitleCase(props.category)} Headlines</strong></h1>

        {this.state.loading && <Spinner/>}      {/*jar loading true asel tarch spiiner disel nahi tr nahi*//*}


        <div className='row'>

                {!this.state.loading && this.state.articles.map( (element)=>   // if loading chalu nahi (false ahe) then show content
                {  
                   return <div className='col-md-4' key={element.url}>
                              <NewsItem title ={element.title?element.title:""} description = {element.description?element.title:""} 
                              // if imageurl is null then show one default image
                              imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/12/14/1600x900/PTI12-14-2022-000305A-0_1671028673285_1671028673285_1671028700280_1671028700280.jpg"} newsUrl={element.url}
                              author={element.author} date = {element.publishedAt} source={element.source.name}/>
                          </div>
                } )}

        </div>

        <div className="container d-flex justify-content-between my-4">
          {/* We are disabling the button when pages are one because no of pages can not be less than one so no need to keep that button activated *//*}
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.bringPrevPage}>&larr;  Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize )}  type="button" className="btn btn-dark" onClick={this.bringNextPage}>Next  &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News 
*/


// --------------------------------------------------- Function Based ---------------------------------------------------

// import PropTypes from 'prop-types'

import React , {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News =  (props) => {

  // default proptypes 

   const TitleCase = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
}

    // Replace it instead of Constructor
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

  
    const updateNews = async ()=> {

      props.setProgress(10);  // setting progress to 10 so that the loader will be visible 
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(50);
      let parseData = await data.json();
      props.setProgress(70);
      // console.log(parseData);
      setArticles(parseData.articles)
      setTotalResults(parseData.totalResults)
      setLoading(false)
      props.setProgress(100);

    }


    // will run just one time 
    // alternate to componentDidMount
    useEffect(() => {
      document.title = `${TitleCase(props.category)} - Batmya`;
      updateNews();
    } , [])


    const bringPrevPage = async () => {
      setPage(page - 1);
      updateNews();
  }

  const bringNextPage = async () => {
      setPage(page + 1);
      updateNews();
    }


    return (
      <div className='container my-4'>
        
        <h1 className='text-primary text-center' style={{marginTop:'80px' , marginBottom:'27px' }}><strong>Top {TitleCase(props.category)} Headlines</strong></h1>

        {loading && <Spinner/>}      {/*jar loading true asel tarch spiiner disel nahi tr nahi*/}


        <div className='row'>

                {!loading && articles.map( (element)=>   // if loading chalu nahi (false ahe) then show content
                {  
                   return <div className='col-md-4' key={element.url}>
                              <NewsItem title ={element.title?element.title:""} description = {element.description?element.title:""} 
                              // if imageurl is null then show one default image
                              imgUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/12/14/1600x900/PTI12-14-2022-000305A-0_1671028673285_1671028673285_1671028700280_1671028700280.jpg"} newsUrl={element.url}
                              author={element.author} date = {element.publishedAt} source={element.source.name}/>
                          </div>
                } )}

        </div>

        <div className="container d-flex justify-content-between my-4">
          {/* We are disabling the button when pages are one because no of pages can not be less than one so no need to keep that button activated */}
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={bringPrevPage}>&larr;  Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize )}  type="button" className="btn btn-dark" onClick={bringNextPage}>Next  &rarr;</button>
        </div>

      </div>
    )
}

// functional base madhe props khali initialised kartat 
News.defaultProps = {
  pageSize : 8,
  country : 'in',
  category : 'general',        
}

News.propTypes = {
  pageSize : PropTypes.number,
  country : PropTypes.string,
  category : PropTypes.string,
}

export default News 
