// ----------------------------------------- Class Based ---------------------------------------------------


/*
import './App.css';

import React , {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'


export default class App extends Component {

  pageSize=10;

   // Api key =  we are accessing from .env.local . there we have created the variable as REACT_APP_NEWS_API 
   apiKey = process.env.REACT_APP_NEWS_API 

  state = {
    progress:0
  }

  setProgress = (progress)=>{
      this.setState({progress : progress});
  }

  render() {
    return (

      <Router>
      <div>

        <Navbar/>

        <LoadingBar
        height={3}
        color='#4ac9ff'
        progress={this.state.progress}  // for top loading bar
        />


          <Routes>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business'/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment'/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health'/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science'/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports'/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology'/>}/>
            <Route exact path="/news" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="news" pageSize={this.pageSize} country='in' category='general'/>}/>
          </Routes>
          
       


      </div>

      </Router>
    )

  }
}

*/



import './App.css';

import React , {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'


const App = ()=> {

  const [progress, setProgress] = useState(10);

  const pageSize=10;

   // Api key =  we are accessing from .env.local . there we have created the variable as REACT_APP_NEWS_API 
   const apiKey = process.env.REACT_APP_NEWS_API; 

      const a = async (element) =>{
        setProgress(element);
      }

    return (

      <Router>
      <div>

        <Navbar/>

        <LoadingBar
        height={3}
        color='#4ac9ff'
        progress={progress}  // for top loading bar
        />


          <Routes>
            <Route exact path="/general" element={<News setProgress={a} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>}/>
            <Route exact path="/business" element={<News setProgress={a} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business'/>}/>
            <Route exact path="/entertainment" element={<News setProgress={a} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}/>
            <Route exact path="/health" element={<News setProgress={a} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health'/>}/>
            <Route exact path="/science" element={<News setProgress={a} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science'/>}/>
            <Route exact path="/sports" element={<News setProgress={a} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports'/>}/>
            <Route exact path="/technology" element={<News setProgress={a} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology'/>}/>
            <Route exact path="/news" element={<News setProgress={a} apiKey={apiKey} key="news" pageSize={pageSize} country='in' category='general'/>}/>
          </Routes>
          
       


      </div>

      </Router>
    )


}

export default App

