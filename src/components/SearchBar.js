import React, { Component } from 'react';
import JobCards from './JobCards';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { getItems: props.getItems, setItems: props.setItems, handleSearch:props.handleSearch,changeHandler:props.changeHandler}
    }
    
    render() { 
        let s = "margin:auto;max-width:300px";
        return ( 
            <div>
                <form className={styles.example} action="#" style={{s}}>
                    <input type="text" placeholder="Search.." name="search2" onChange={this.state.changeHandler}/>
                    <button type="button" onClick={this.state.handleSearch}>Search</button>
                </form>
                <JobCards getItems = {this.state.getItems}/>
            </div>
         );
    }
}
 
export default SearchBar;