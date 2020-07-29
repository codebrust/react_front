import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import axios from 'axios';

import StudentItem from './StudentItem';

let Students = [];


class ListStudent extends Component{
  
    constructor(props){
        super(props);
        // console.log(this.props)
        this.state = {
            load: false
        }
    }

    getStudents(params) {
        axios.get('http://localhost:3010/api/student', {
            // params: {
            //   ID: 12345
            // }
          })
          .then(function (response) {
              Students = response.data;
              this.setState({load :true});
            console.log(Students);
          })
          .catch(function (error) {
            console.log(error);
          })
        
    }
    
    render(){
        // console.log(this.props.persons);
        this.getStudents();
        return(
            Students.map((person)=>(
            <StudentItem key={person.person_id} person = {person}/>
        )))
    }
}


ListStudent.propTypes = {
    persons : PropTypes.array.isRequired
}

export default ListStudent;
