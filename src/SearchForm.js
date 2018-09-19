
import React, { Component } from 'react';

/**
 * SearchForm component.
 * Will represent a form to search repos associated to a github user
 */
class SearchForm extends Component{
    constructor(props){
      super();
      this.state = {
        user : props.user,
        includeMember : props.includeMember
      }
    }
  
    handleSubmit (ev){
      ev.preventDefault();
      this.props.onSearch({
        user : this.state.user,
        includeMember : this.state.includeMember
      });
    }
  
    handleUser (ev){
      this.setState({user:ev.target.value});
    }
  
    handleIncludeMember (ev){
      this.setState({includeMember:ev.target.checked});
    }
  
    render(){
      return(
        <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
          <input 
            className="user-input"
            type="text"
            value={this.state.user}
            onChange={this.handleUser.bind(this)}
          />
          <button className="submit-form">Search</button>
          <label className="check-member">
            <input  
              type="checkbox"
              checked={this.state.includeMember}
              onChange={this.handleIncludeMember.bind(this)}
            />Include repositories where user is member
          </label>
        </form>
      );
    }
  }

  export default SearchForm;