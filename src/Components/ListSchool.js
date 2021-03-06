import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import axios from 'axios';

import SchoolItem from './SchoolItem';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import "./responsiveTable.css"

let Schools = [];


class ListStudent extends Component{
  
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            load: false,
            sdata: []
        };
        this.getSchools = this.getSchools.bind(this)
    }

    getSchools(params) {
        axios.get('http://localhost:3008/api/school', {
            headers: {
              authtoken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Ik5hbWUiOm51bGwsIklEIjoyLCJVc2VybmFtZSI6InRlYWNoZXIiLCJVc2VydHlwZUlEIjo0LCJVc2VydHlwZSI6IlRlYWNoZXIiLCJTY2hvb2xJRCI6MX0sImlhdCI6MTU5Njc4Mzk0NSwiZXhwIjoxNTk2ODcwMzQ1fQ.MrAMebr5N3_FF3j2cDPOx5xKzA4bwcFvTxMBTzOOqGI"
            }
          })
          .then((response)=>{
              Schools = response.data;
              this.setState({
                  load : true
              })
            console.log(Schools);
          })
          .catch(function (error) {
            console.log({error});
          })
        
    }
    
    render(){
        // console.log(this.props.persons);
        {if(!this.state.load){
            this.getSchools()
            }
            else{
                console.log(this.state.load)
             }
            }
        return(
        //     Schools.map((school)=>(
        //     <SchoolItem key={school.SchoolID} school = {school}/>
        // ))
        <Table>
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Date</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
            {Schools.map((school)=>(
                <Tr>
                    <Td>{school.Name}</Td>
                </Tr>
             ))}

          {/* <Tr>
            <Td>Tablescon</Td>
            <Td>9 April 2019</Td>
            <Td>East Annex</Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>205 Gorgas</Td>
          </Tr>
          <Tr>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>Github</Td>
          </Tr> */}
        </Tbody>
      </Table>
        )
    }
}


ListStudent.propTypes = {
    persons : PropTypes.array.isRequired
}

export default ListStudent;
