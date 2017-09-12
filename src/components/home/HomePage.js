import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>Heading</h1>
        <p>Blah Blah Blah Blah</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more </Link>
      </div>
    );
  }
}

export default HomePage;
