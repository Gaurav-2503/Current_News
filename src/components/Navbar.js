// ---------------------------------------- Class Based -----------------------------------------------------

// import PropTypes from 'prop-types'
 /* 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (

      <div>

        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#242ae0'}}>
        <Link className="navbar-brand" to="/general">Batmya</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item"> <Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>

            </ul>
            
        </div>
        </nav>

      </div>
      
    )
  }
}

export default Navbar

*/



// --------------------------------------- Function Based -------------------------------------

// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> {

    return (

      <div>

        <nav className="navbar navbar-expand-lg fixed-top navbar-dark " style={{backgroundColor:'#242ae0'}}>
        <Link className="navbar-brand" to="/general">Batmya</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item"> <Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>

            </ul>
            
        </div>
        </nav>

      </div>
      
    )
  
}

export default Navbar