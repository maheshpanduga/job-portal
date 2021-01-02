import React, { Component } from 'react';
import JobCard from "./JobCard";

class JobCards extends Component {
    constructor(props) {
        super(props);
        this.state = { getItems: props.getItems }
    }
    
    render() { 
        return ( 
                this.state.getItems().map(item => <JobCard key={item.id} employee={item}/>)
         );
    }
}
 
export default JobCards;