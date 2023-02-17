// ---------------------------------------------------- Class Based ------------------------------------------------

/*
import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {

    let {title , description , imgUrl , newsUrl , author , date , source} = this.props;

    return (
      <div>
        <div className='my-2'>
          
            <div className="card">
            <span className="position-relative top-0 start-100 translate-middle badge rounded-pill text-light pd-1 bg-primary">
                    {source}
            </span>
          
            <img className="card-img-top" src={imgUrl} alt="..."/>
            <div className="card-body">
                
                <h5 className="card-title">{title}  
                
                </h5>
                
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-primary">-<strong> Updated by : </strong> {!author?"Unknown":author} <br/>-  <strong>On</strong> {!date?"-":new Date(date).toGMTString()}</small></p>  
                                            {/* converting the utc format of date into the gmt format */ /*}
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm" style={{backgroundColor:'#242ae0' , color:'white'}}>Read More</a>
            </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Newsitem
*/



// ------------------------------------------------ Function Based ----------------------------------------------------------

import React from 'react'

const Newsitem = (props)=> {



    let {title , description , imgUrl , newsUrl , author , date , source} = props;

    return (
      <div>
        <div className='my-2'>
          
            <div className="card">
            <span className="position-relative top-0 start-100 translate-middle badge rounded-pill text-light pd-1 bg-primary">
                    {source}
            </span>
          
            <img className="card-img-top" src={imgUrl} alt="..."/>
            <div className="card-body" style={{backgroundColor:'#d4e7fa'}}>
                
                <h5 className="card-title" style={{backgroundColor:'#9bcafa', borderRadius:'5px' , padding:'3px', border:'1px solid blue'}}>{title}  
                
                </h5>
                
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-dark">-<strong> Updated by : </strong> {!author?"Unknown":author} <br/>-  <strong>On</strong> {!date?"-":new Date(date).toGMTString()}</small></p>  
                                            {/* converting the utc format of date into the gmt format   */}
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm" style={{backgroundColor:'#242ae0' , color:'white'}}>Read More</a>
            </div>
            </div>
        </div>

      </div>
    )

}

export default Newsitem