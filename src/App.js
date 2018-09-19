import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Results from './Results';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results : [],
      user : 'maenginner',
      includeMember : false
    }
  }

  componentDidMount(){
    this.searchResults(this.state);
  }

  searchResults (params){
    let url = 'https://api.github.com/users/'+params.user+'/repos?sort=updated';
    if (params.includeMember) url+='&type=all'

    fetch(url).then(function(response){
      if (response.ok){
        response.json().then(function(body){
          this.setState({ results:body })
        }.bind(this));
      }else{
        this.setState({ results:[] })
      }
    }.bind(this));
  }

  changeSearchCriteria(state){
    this.setState(state);
    this.searchResults(state);
  }

  render() {
    return (
     <div className="App">
      <SearchForm 
        user={this.state.user}
        includeMember={this.state.includeMember}
        onSearch = {this.changeSearchCriteria.bind(this)}
      />
      <Results 
        results={this.state.results}
      />
     </div>
    );
  }
}


export default App;
