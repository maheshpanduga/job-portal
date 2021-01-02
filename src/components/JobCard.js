import React, { Component } from 'react';
import styles from './JobCard.module.css';

class JobCard extends Component {
    constructor(props) {
        super(props);
        this.state = { employee: props.employee }
    }
    render() { 
        let {Image, name} = this.state.employee;
        return ( 

            <div className={styles.card}>
                <img src={Image} alt="Avatar" style={{width: "100%", height:"5%"}}/>
                <div className={styles.container}>
                    <h4><b>{name}</b></h4> 
                </div>
            </div>
         );
    }
}
 
export default JobCard;