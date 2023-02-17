// -------------------------  Class Based  ----------------------------------------

/* import React, { Component } from 'react'
import loading from './loadingSpinner.gif'


export class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='rounded mx-auto d-block my-4' src={loading} alt="Loading"/>
      </div>
    )
  }
}

export default Spinner

*/



// --------------------------------- Function Based  -----------------------------------------------------

import React  from 'react'
import loading from './loadingSpinner.gif'


 const Spinner = ()=> {

    return (
      <div>
        <img className='rounded mx-auto d-block my-4' src={loading} alt="Loading"/>
      </div>
    )
}

export default Spinner