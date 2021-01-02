import JobCards from "./JobCards";
import SearchBar from "./SearchBar";
import React, { Component } from 'react';

class JobPortal extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] , searchText : '', persons: []}
    }

    componentDidMount() {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({items: result});
          this.setState({persons: result});
          console.log(result, "result")
        },
        (error) => {
          console.log(error)
        }
      )
    }

    getItems = () => {

        return this.state.items;
    }

    setItems = (items) => {
        this.setState({
            items: items
          });
    }

    handleSearch = () => {
        var self = this;
        let filteredItems = this.state.persons.filter(function (e) {
            return e.name.search(new RegExp(self.state.searchText, "i")) !== -1;
        });
        this.setItems(filteredItems);
    }

    changeHandler = (e) => {
        this.setState({searchText : e.target.value});
        this.handleSearch();
    }
    

    render() { 
        console.log(this.state.items, 'RENDER')
        return ( 
            <div style={{jusifyContent: "center", alignItems: "center"}}>
                <SearchBar getItems = {this.getItems} setItems = {this.setItems}
                handleSearch = {this.handleSearch}
                changeHandler = {this.changeHandler}/>
            </div>
         );
    }
}
 
export default JobPortal;