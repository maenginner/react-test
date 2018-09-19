import ResultItem from './ResultItem';
import React, { Component } from 'react';


//Temporary Location
class Results extends Component{
    render(){
      return(
        <ul className="results-list">
          {this.props.results.map(function(result){
            return <ResultItem key={result.id} result={result} />;
          })}
        </ul>
      );
    }
  }

  export default Results