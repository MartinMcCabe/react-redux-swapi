import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFoundPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h2>Page Not Found.</h2>
      </div>
    )
  }
}

export default NotFoundPage;
