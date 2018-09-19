import React, { Component } from 'react';
import moment from 'moment';


//Temporary Location
class ResultItem extends Component{
    render(){
      let result = this.props.result;
      return(
        <li className="result">
          <h3>
            <a href={result.html_url} target="_blank">
              {result.name}
            </a> {result.private && <span className="private-result">Private</span>}
          </h3>
          <p className="result-info">
            {result.fork && <span className="result-fork">
              <i className="fa fa-code-fork"/> Forked
            </span>}
          </p>
          <p className="result-description">{result.description}</p>
          <p className="result-updated">Updated {moment(result.updated_at).fromNow()}</p>
          <div className="result-stats">
            <span className="result-stat">
              {result.language}
            </span>
            <span className="result-stat">
              <i className="fa fa-code-fork"/> {result.forks_count}
            </span>
            <span className="result-stat">
              <i className="fa fa-star"/> {result.stargazers_count}
            </span>
            <span className="result-stat">
              <i className="fa fa-eye"/> {result.watchers_count}
            </span>
          </div>
        </li>
      );
    }
  }

  export default ResultItem;