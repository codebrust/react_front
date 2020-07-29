import React, {Component} from 'react';
import PropTypes from 'prop-types'


class PersonItem extends Component{
    getStyle = ()=>{
        return {
            backgroundColor:"#ddd",
            // color:this.props.Person.completed?"brown":"black",
            margin:4,
            padding: 10,
            borderBottom:'2px #999 solid',
            borderRadius:'5px',
            corner:3,
            // textDecoration : this.props.Person.completed?'line-through':'none'
        }
    }
    
    mark=(e)=>{
        // console.log(this.props);
        console.log({});
        
    }

    render(){
        console.log(this.props.person)
        return (
            <div>
                <p>
            {this.props.person.person_id} 
            {this.props.person.name} 
            {this.props.person.fk_gender}
            </p>
            </div>

        );
    }
}

PersonItem.propTypes = {
    person : PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor:"#f4f4f4",
//     margin:4,
//     padding: 8
// }

export default PersonItem