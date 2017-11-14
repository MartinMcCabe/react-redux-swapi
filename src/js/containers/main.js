import React, { Component, cloneElement } from 'react'
// import { NavLink } from 'react-router-dom'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='main'>
        <header>
          {/* <nav>
            <ul>
              <li><NavLink to="/">People</NavLink></li>
              <li><NavLink to="/planets">Planets</NavLink></li>
            </ul>
          </nav> */}
        </header>

        { cloneElement( this.props.children, this.props ) }

        <footer>&copy; martinmccabe 2017</footer>
      </div>
    )
  }
}

export default Main
